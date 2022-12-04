declare module GuildJoinRequestUpdate {

    export interface User {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar_decoration?: any;
        avatar: string;
    }

    export interface ActionedByUser {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar_decoration?: any;
        avatar: string;
    }

    export interface Request {
        user_id: string;
        user: User;
        rejection_reason?: any;
        last_seen: Date;
        id: string;
        guild_id: string;
        form_responses: any[];
        created_at: Date;
        application_status: string;
        actioned_by_user: ActionedByUser;
        actioned_at: string;
    }

    export interface D {
        status: string;
        request: Request;
        guild_id: string;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

