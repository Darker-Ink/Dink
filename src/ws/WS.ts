import { GatewayEvents, OpCodes, GatewayUrl, DiscordApiVersion, Status } from '../constants';
import WebSocket from 'ws';
import { Client } from '../Client';
import { GatewayDispatchEvents } from 'discord-api-types/v10';
import { ClientUser } from '../Structures/ClientUser';
import { Payloads } from './Payloads';
import { Message } from '../Structures/Message';
import { Channel } from '../Structures/Channel';
import { RawChannelData as chan } from '../types/payloads/GuildCreate';
const cannotReconnectCodes = [4_004, 4_010, 4_011, 4_013, 4_014, 1_000, 1_200];

export class WS {

    token: string;
    gateway: WebSocket;
    lastEvent: GatewayPayload;
    sessionID: string;
    private lastHeatbeatAck: number
    private lastHeartbeatSent: number;
    private expectingClose: boolean;
    intents: number;
    private  client: Client;
    private  resumeUrl: string;
    private  payloads: Payloads;
    private  heartbeatInterval: NodeJS.Timeout;
    private  ready: boolean;
    private  readyTimeout: any;
    private  options: any;
    private  expectingGuilds: Set<string>;
    private status: string;
    ping: number;

    constructor(token: string, intents: number, client: Client) {
        this.token = token;
        this.intents = intents;

        this.gateway = undefined;

        Object.defineProperty(this, 'client', {
            value: client,
            writable: false,
            enumerable: false,
            configurable: false
        });

        this.lastEvent = undefined;

        this.sessionID = undefined;

        this.ping = -1;

        Object.defineProperty(this, 'lastHeatbeatAck', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'lastHeartbeatSent', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'expectingClose', {
            value: false,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'resumeUrl', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'payloads', {
            value: new Payloads(this),
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'heartbeatInterval', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'readyTimeout', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        this.options = this.client.options;

        Object.defineProperty(this, 'expectingGuilds', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'status', {
            value: Status.WAITING_ON_GUILDS,
            writable: true,
            enumerable: false,
            configurable: false
        })

        this.connect();
    }


    private connect() {

        const wsUrl = this.resumeUrl ? `${this.resumeUrl}?v=${DiscordApiVersion}&encoding=json` : GatewayUrl;

        this.gateway = new WebSocket(wsUrl);

        this.gateway.on('open', () => {
            this.gateway.send(this.resumeUrl ? this.payloads.resume() : this.payloads.identify());
        });

        this.handleWebsocket(this.gateway);
    }

    private handleWebsocket(WS: WebSocket): void { // Note, This does **NOT** handle indentifing, it just handles the websocket (it assumes that the websocket is already identified)
        WS.on('message', (data: Buffer) => {
            const payload: GatewayPayload = JSON.parse(data.toString());

            if (payload.s !== null || payload.op !== OpCodes.Hello) {
                this.lastEvent = payload;
            }

            if (payload?.t == 'READY') {
                this.sessionID = payload.d.session_id;
                this.resumeUrl = payload.d.resume_gateway_url;
                this.client.setUser(new ClientUser(this.client, payload.d.user));

                this.expectingGuilds = new Set(payload.d.guilds.map((guild: { id: string }) => guild.id));
            }

            this.client.emit('DEBUG_WS', payload);

            switch (payload.op) {
                case OpCodes.Hello:
                    WS.send(this.payloads.heartbeat());

                    this.lastHeartbeatSent = Date.now();

                    this.heartbeatInterval = setInterval(() => {
                        this.sendHeartbeat();
                    }, payload.d.heartbeat_interval);

                    break;

                case OpCodes.HeartbeatAck:
                    this.ackHeartbeat();
                    break;

                case OpCodes.Dispatch:

                    switch (payload.t) {
                        case GatewayDispatchEvents.MessageCreate:
                            this.client.emit(GatewayEvents.MESSAGE_CREATE, new Message(this.client, payload.d));
                            break;
                        case GatewayDispatchEvents.GuildCreate:

                            if (this.status == Status.WAITING_ON_GUILDS && this.expectingGuilds.has(payload.d.id)) {
                                this.expectingGuilds.delete(payload.d.id);
                                this.client.guilds.set(payload.d.id, payload.d);
                                
                                payload.d.channels.forEach((channel: chan) => {
                                    this.client.channels.set(channel.id, new Channel(this.client, channel));
                                });

                                this.checkReady();
                            } else {
                                this.client.emit(GatewayEvents.GUILD_CREATE, payload.d);
                            }
                            break;
                        case GatewayDispatchEvents.UserUpdate:
                            this.client.setUser(new ClientUser(this.client, payload.d));
                            break;
                    }

                    break;

                case OpCodes.InvalidSession:
                    console.log('Received INVALID_SESSION payload');
                    break;

                case OpCodes.Reconnect:
                    console.log('Received RECONNECT payload');
                    this.expectingClose = true;
                    this.destroy(true)
                    break;

                case OpCodes.Resume:
                    console.log('Received RESUME payload');
                    break;

                default:
                    console.log(`Received unknown payload ${Object.keys(OpCodes).find(key => OpCodes[key as keyof typeof OpCodes] === payload.op)}`);

                    break;
            }

        });

        WS.on('close', (data: any) => {
            console.log('Disconnected from Discord Gateway with code', data);

            if (!this.expectingClose) {
                if (cannotReconnectCodes.includes(data)) {
                    console.log('Cannot resume to Discord Gateway');

                    this.resumeUrl = undefined;

                    this.destroy(true);

                    return;
                }

                console.log('Attempting to resume to Discord Gateway');
                this.destroy(true);
            } else {
                this.expectingClose = false;
            }
        });
    }

    private destroy(reconnect?: boolean) {
        if (this.gateway.OPEN || this.gateway.CONNECTING) {
            this.gateway.close();
        }

        clearInterval(this.heartbeatInterval);
        this.lastHeatbeatAck = undefined;
        this.lastHeartbeatSent = undefined;

        if (reconnect) {
            this.connect();
        }
    }

    private checkReady() {

        if (this.readyTimeout) {
            clearTimeout(this.readyTimeout);

            this.readyTimeout = undefined;
        }

        if (this.expectingGuilds.size == 0) {
            this.status = Status.READY;
            this.client.emit(GatewayEvents.READY, this.client);

            return;
        }

        this.readyTimeout = setTimeout(() => {

            this.readyTimeout = undefined; 

            this.client.emit(GatewayEvents.READY, this.client);

        }, this.options.waitForGuildTimeout).unref();

    }

    private ackHeartbeat() {
        this.lastHeatbeatAck = Date.now();
        this.ping = Date.now() - this.lastHeartbeatSent;
    }

    private sendHeartbeat() {
        this.gateway.send(this.payloads.heartbeat());

        this.lastHeartbeatSent = Date.now();
    }

    send(payload?: string | { op: number, d?: any}) {
        if (typeof payload !== 'string') payload = JSON.stringify(payload);
        this.gateway.send(payload);
    }
}