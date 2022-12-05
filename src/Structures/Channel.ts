import { RawChannelData } from "payloads/GuildCreate";
import { Client } from "../Client";

export class Channel {
    id: string;
    client: Client;
    constructor(client: Client, channelObj: RawChannelData) {
        this.id = channelObj.id;

        Object.defineProperty(this, 'client', {
            value: client,
            writable: false,
            enumerable: false,
            configurable: false
        })
    }

    send(msg: string) {
        return new Promise((resolve, reject) => {
            this.client.rest.post(`/channels/${this.id}/messages`, {
                body: {
                    content: msg
                }
            }).then((res) => resolve(res)).catch((err) => reject(err));
        });
    }
}