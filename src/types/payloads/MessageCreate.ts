export interface Member {
    roles: string[];
    premium_since?: any;
    pending: boolean;
    nick?: any;
    mute: boolean;
    joined_at: Date;
    flags: number;
    deaf: boolean;
    communication_disabled_until?: any;
    avatar?: any;
}

export interface Author {
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar_decoration?: any;
    avatar: string;
}

export interface RawMessageCreate {
    type: number;
    tts: boolean;
    timestamp: Date;
    referenced_message?: any;
    pinned: boolean;
    nonce: string;
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
    author: Author;
    attachments: any[];
    guild_id: string;
}