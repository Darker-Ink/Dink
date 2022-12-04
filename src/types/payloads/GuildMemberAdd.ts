declare module GuildMemberAdd {

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
        roles: any[];
        premium_since?: any;
        pending: boolean;
        nick?: any;
        mute: boolean;
        joined_at: Date;
        is_pending: boolean;
        guild_id: string;
        flags: number;
        deaf: boolean;
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

