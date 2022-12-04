declare module GuildUpdate {

    export interface Roles {
        hash: string;
    }

    export interface Metadata {
        hash: string;
    }

    export interface Channels {
        hash: string;
    }

    export interface Hashes {
        version: number;
        roles: Roles;
        metadata: Metadata;
        channels: Channels;
    }

    export interface Roles2 {
        hash: string;
    }

    export interface Metadata2 {
        hash: string;
    }

    export interface Channels2 {
        hash: string;
    }

    export interface GuildHashes {
        version: number;
        roles: Roles2;
        metadata: Metadata2;
        channels: Channels2;
    }

    export interface Tags {
        bot_id: string;
    }

    export interface Role {
        version: any;
        unicode_emoji?: any;
        position: number;
        permissions: string;
        name: string;
        mentionable: boolean;
        managed: boolean;
        id: string;
        icon?: any;
        hoist: boolean;
        flags: number;
        description?: any;
        color: number;
        tags: Tags;
    }

    export interface Sticker {
        version: number;
        type: number;
        tags: string;
        name: string;
        id: string;
        guild_id: string;
        format_type: number;
        description?: any;
        available: boolean;
        asset: string;
    }

    export interface D {
        id: string;
        verification_level: number;
        preferred_locale: string;
        afk_channel_id?: any;
        vanity_url_code?: any;
        splash?: any;
        icon?: any;
        widget_enabled: boolean;
        rules_channel_id: string;
        premium_tier: number;
        nsfw: boolean;
        system_channel_flags: number;
        system_channel_id?: any;
        version: number;
        max_members: number;
        afk_timeout: number;
        application_id?: any;
        hub_type?: any;
        banner?: any;
        nsfw_level: number;
        max_stage_video_channel_users: number;
        max_video_channel_users: number;
        premium_subscription_count: number;
        region: string;
        features: string[];
        premium_progress_bar_enabled: boolean;
        hashes: Hashes;
        guild_hashes: GuildHashes;
        guild_id: string;
        safety_alerts_channel_id?: any;
        description?: any;
        roles: Role[];
        owner_id: string;
        emojis: any[];
        public_updates_channel_id: string;
        widget_channel_id?: any;
        stickers: Sticker[];
        discovery_splash?: any;
        explicit_content_filter: number;
        default_message_notifications: number;
        mfa_level: number;
        name: string;
        max_presences?: any;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

