declare module InviteCreate {

    export interface Inviter {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar_decoration?: any;
        avatar: string;
    }

    export interface D {
        uses: number;
        type: number;
        temporary: boolean;
        max_uses: number;
        max_age: number;
        inviter: Inviter;
        guild_id: string;
        expires_at: Date;
        created_at: Date;
        code: string;
        channel_id: string;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

