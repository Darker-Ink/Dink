import { RawMessageCreate } from "../types/payloads/MessageCreate";
import { Client } from "../Client";
import { MessageRef } from "./MessageRef";
import { User } from "./User";
import { Channel } from "./Channel";

export class Message {
    client: Client;
    type: number;
    createdAt: Date;
    editedAt: Date;
    repliedTo?: MessageRef;
    pinned: boolean;
    mentions: any[];
    author: User;
    id: string;
    content: string;
    channel: Channel;
    constructor(client: Client, messageData: RawMessageCreate) {
        
        Object.defineProperty(this, 'client', {
            value: client,
            writable: false,
            enumerable: false,
            configurable: false
        })

        this.type = messageData.type;

        this.createdAt = new Date(messageData.timestamp);

        this.editedAt = messageData.edited_timestamp ? new Date(messageData.edited_timestamp) : null;

        this.repliedTo = messageData.message_reference ? new MessageRef(this.client, messageData.referenced_message) : null;

        this.pinned = messageData.pinned;

        this.mentions = messageData.mentions;

        this.author = new User(this.client, messageData.author);

        this.id = messageData.id;

        this.content = messageData.content;

        this.channel = this.client.channels.get(messageData.channel_id);
    }

    delete() {
        return new Promise((resolve, reject) => {
            this.client.rest.delete(`/channels/${this.channel.id}/messages/${this.id}`).then((res) => resolve(res)).catch((err) => reject(err));
        });
    }
}