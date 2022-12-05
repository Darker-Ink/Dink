import { RawMessageReference } from "misc/MessageReferenced";

export interface MessageReference {
    message_id: string;
    guild_id: string;
    channel_id: string;
}

export interface MessageReference2 {
    message_id: string;
    guild_id: string;
    channel_id: string;
}

export interface Member {
    roles: string[];
    premium_since?: any;
    pending: boolean;
    nick: string;
    mute: boolean;
    joined_at: Date;
    flags: number;
    deaf: boolean;
    communication_disabled_until?: any;
    avatar?: any;
}

export interface Author2 {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar_decoration?: any;
    avatar: string;
    bot?: boolean;
}

export interface RawMessageCreate {
    type: number;
    tts: boolean;
    timestamp: Date;
    referenced_message: RawMessageReference;
    pinned: boolean;
    nonce: string;
    message_reference: MessageReference2;
    mentions: any[];
    mention_roles: any[];
    mention_everyone: boolean;
    member: Member;
    id: string;
    flags: number;
    embeds: any[];
    edited_timestamp?: any;
    content: string;
    components: any[];
    channel_id: string;
    author: Author2;
    attachments: any[];
    guild_id: string;
}