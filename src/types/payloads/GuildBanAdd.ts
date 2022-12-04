declare module GuildBanAdd {

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
        guild_id: string;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

