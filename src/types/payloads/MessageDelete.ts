declare module MessageDelete {

    export interface D {
        id: string;
        channel_id: string;
        guild_id: string;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

