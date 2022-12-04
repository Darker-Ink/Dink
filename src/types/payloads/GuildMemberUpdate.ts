declare module GuildMemberUpdate {

    export interface User {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar_decoration?: any;
        avatar: string;
    }

    export interface D {
        user: User;
        roles: string[];
        premium_since?: any;
        pending: boolean;
        nick: string;
        joined_at: Date;
        is_pending: boolean;
        guild_id: string;
        flags: number;
        communication_disabled_until?: any;
        avatar?: any;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

