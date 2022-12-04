declare module Typing {

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

    export interface TpingPayload {
        user_id: string;
        timestamp: number;
        member: Member;
        channel_id: string;
        guild_id: string;
    }
}