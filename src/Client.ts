import { REST } from '@discordjs/rest';
import { GatewayIntents, DiscordApiVersion } from './constants'
import { GatewayIntentBits, GatewayDispatchEvents } from 'discord-api-types/v10'
import EventEmitter from 'events';
import { WS } from './ws/WS';
import { ClientUser } from './Structures/ClientUser';
import { Collection } from './utils/Collection';
import { Errors } from './Errors';
import { Message } from './Structures/Message';


export interface Client {
    on(event: 'Ready', listener: (client: Client) => void): this;
    on(event: 'MessageCreate', listener: (message: Message) => void): this;
    on(event: 'GuildCreate', listener: (guild: any) => void): this;
    on(event: 'GuildMembersChunk', listener: (chunk: any) => void): this;
    on(event: 'HeartBeat', listener: () => void): this;
}

export class Client extends EventEmitter {
    private token: undefined | string;
    ws: WS;
    user: ClientUser;
    guilds: Collection<string, any>;
    channels: Collection<string, any>;
    users: Collection<string, any>;
    rest: REST;
    intents: number;
    options: { waitForGuildTimeout: number; waitForGuildMembersTimeout: number; };
    uptime: number;
    dmChannels: Collection<string, any>;
    constructor(obj: {
        intents: (keyof typeof GatewayIntents)[]
    }) {
        super();
        this.intents = obj.intents.reduce((acc, p) => acc | GatewayIntents[p], 0);

        Object.defineProperty(this, 'token', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'ws', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'rest', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        })

        Object.defineProperty(this, 'options', {
            value: {
                waitForGuildTimeout: 10000,
                waitForGuildMembersTimeout: 10000
            },
            writable: true,
            enumerable: false,
            configurable: false
        })

        this.user = undefined;

        this.guilds = new Collection();

        this.channels = new Collection();

        this.users = new Collection();

        this.dmChannels = new Collection();

        this.uptime = Date.now();
    }

    login(token: string) {

        if (this.token) {
            throw new Error(Errors.ALREADY_LOGGED_IN);
        } else if (!token) {
            throw new Error(Errors.NO_TOKEN);
        }

        this.token = token;

        this.ws = new WS(token, this.intents, this);

        this.rest = new REST({ version: DiscordApiVersion }).setToken(token);
    }

    setUser(user: ClientUser) {
        this.user = user;
    }
}