declare module GuildMembersChunk {

    export interface User {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        bot: boolean;
        avatar: string;
    }

    export interface Member {
        user: User;
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

    export interface D {
        members: Member[];
        guild_id: string;
        chunk_index: number;
        chunk_count: number;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

