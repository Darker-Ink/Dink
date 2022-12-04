import { DiscordSnowflake } from '@sapphire/snowflake';
import { Client } from '../Client';
// TO DO:
// - Function's to do stuff like setUsername, setAvatar, etc.

export class ClientUser {
    username: string;
    discriminator: number;
    id: string;
    avatar: string;
    bot: boolean;
    tag: string;
    private client: Client;
    raw: ClientUserObj;
    createdAt: Date;
    constructor(client: Client, clientData: ClientUserObj) {

        Object.defineProperty(this, 'client', {
            value: client,
            writable: false,
            enumerable: false,
            configurable: false
        })

        this.username = clientData.username;

        this.discriminator = Number(clientData.discriminator);

        this.id = clientData.id;

        this.avatar = clientData.avatar;

        this.bot = clientData.bot;

        this.tag = `${this.username}#${this.discriminator}`;

        this.raw = clientData;

        this.createdAt = new Date(DiscordSnowflake.timestampFrom(this.id));
    }

    async setUsername(username: string) {
        
        return new Promise((resolve, reject) => {
            this.client.rest.patch(`/users/@me`, {
                body: {
                    username
                }
            }).then((res) => {
                this.username = username;
                resolve(this);
            }).catch((err) => {
                reject(err);
            })
        })

    }
}