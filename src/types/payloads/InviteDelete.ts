declare module InviteDelete {

    export interface D {
        guild_id: string;
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

