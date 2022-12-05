import { Author2 } from "payloads/MessageCreate";
import { Client } from "../Client";

export class User {
    username: string;
    publicFlags: number;
    id: string;
    discriminator: string;
    tag: string;
    avatarHash: string;
    client: Client;
    bot: boolean;
    constructor(client: Client, userData: Author2) {
        this.username = userData.username;
        this.publicFlags = userData.public_flags;
        this.id = userData.id;
        this.discriminator = userData.discriminator;
        this.tag = `${this.username}#${this.discriminator}`;
        this.avatarHash = userData.avatar;
        this.client = client;
        this.bot = userData.bot ? true : false;
    }

    dm(msg: string) {
        return new Promise((resolve, reject) => {

            if (!this.client.dmChannels.has(this.id)) {

                this.client.rest.post('/users/@me/channels', {
                    body: {
                        recipient_id: this.id
                    }
                }).then((res) => {

                    // @ts-ignore
                    this.client.dmChannels.set(this.id, res.id);

                    // @ts-ignore
                    this.client.rest.post(`/channels/${res.id}/messages`, {
                        body: {
                            content: msg
                        }
                    }).then((res) => resolve(res)).catch((err) => reject(err))
                }).catch((err) => reject(err));
            } else {
                this.client.rest.post(`/channels/${this.client.dmChannels.get(this.id)}/messages`, {
                    body: {
                        content: msg
                    }
                }).then((res) => resolve(res)).catch((err) => reject(err))
            }
        });
    }
}