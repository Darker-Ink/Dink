declare module Ready {

    export interface UserSettings {
    }

    export interface User {
        verified: boolean;
        username: string;
        mfa_enabled: boolean;
        id: string;
        flags: number;
        email?: any;
        discriminator: string;
        bot: boolean;
        avatar: string;
    }

    export interface Guild {
        unavailable: boolean;
        id: string;
    }

    export interface Application {
        id: string;
        flags: number;
    }

    export interface ReadyPayload {
        v: number;
        user_settings: UserSettings;
        user: User;
        session_type: string;
        session_id: string;
        resume_gateway_url: string;
        relationships: any[];
        private_channels: any[];
        presences: any[];
        guilds: Guild[];
        guild_join_requests: any[];
        geo_ordered_rtc_regions: string[];
        application: Application;
        _trace: string[];
    }
}