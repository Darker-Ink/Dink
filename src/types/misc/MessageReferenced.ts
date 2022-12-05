
export interface MessageReference {
    message_id: string;
    guild_id: string;
    channel_id: string;
}

export interface Author {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar_decoration?: any;
    avatar: string;
}

export interface RawMessageReference {
    type: number;
    tts: boolean;
    timestamp: Date;
    pinned: boolean;
    message_reference: MessageReference;
    mentions: any[];
    mention_roles: any[];
    mention_everyone: boolean;
    id: string;
    flags: number;
    embeds: any[];
    edited_timestamp?: any;
    content: string;
    components: any[];
    channel_id: string;
    author: Author;
    attachments: any[];
}