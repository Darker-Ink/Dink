declare module GuildCreate {

    export interface ApplicationCommandCounts {
        1: number;
    }

    export interface PermissionOverwrite {
        type: number;
        id: string;
        deny: string;
        allow: string;
    }

    export interface Channel {
        version: any;
        type: number;
        position: number;
        permission_overwrites: PermissionOverwrite[];
        name: string;
        id: string;
        flags: number;
        topic: string;
        rate_limit_per_user?: number;
        parent_id: string;
        last_message_id: string;
        default_thread_rate_limit_per_user?: number;
        nsfw?: boolean;
    }

    export interface Tags {
        bot_id: string;
    }

    export interface Role {
        version: any;
        unicode_emoji?: any;
        tags: Tags;
        position: number;
        permissions: string;
        name: string;
        mentionable: boolean;
        managed: boolean;
        id: string;
        icon?: any;
        hoist: boolean;
        flags: number;
        color: number;
    }

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
        nick?: string;
        mute: boolean;
        joined_at: Date;
        flags: number;
        deaf: boolean;
        communication_disabled_until?: any;
        avatar?: any;
    }

    export interface ThreadMetadata {
        locked: boolean;
        invitable: boolean;
        create_timestamp: Date;
        auto_archive_duration: number;
        archived: boolean;
        archive_timestamp: Date;
    }

    export interface Thread {
        type: number;
        total_message_sent: number;
        thread_metadata: ThreadMetadata;
        rate_limit_per_user: number;
        parent_id: string;
        owner_id: string;
        name: string;
        message_count: number;
        member_count: number;
        last_message_id: string;
        id: string;
        guild_id: string;
        flags: number;
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
    }

    export interface Roles {
        omitted: boolean;
        hash: string;
    }

    export interface Metadata {
        omitted: boolean;
        hash: string;
    }

    export interface Channels {
        omitted: boolean;
        hash: string;
    }

    export interface GuildHashes {
        version: number;
        roles: Roles;
        metadata: Metadata;
        channels: Channels;
    }

    export interface D {
        application_command_counts: ApplicationCommandCounts;
        channels: Channel[];
        nsfw: boolean;
        verification_level: number;
        roles: Role[];
        stage_instances: any[];
        region: string;
        system_channel_flags: number;
        presences: any[];
        system_channel_id?: any;
        public_updates_channel_id: string;
        afk_channel_id?: any;
        features: string[];
        premium_subscription_count: number;
        large: boolean;
        safety_alerts_channel_id?: any;
        max_members: number;
        id: string;
        preferred_locale: string;
        member_count: number;
        banner?: any;
        members: Member[];
        premium_progress_bar_enabled: boolean;
        max_stage_video_channel_users: number;
        joined_at: Date;
        lazy: boolean;
        max_video_channel_users: number;
        icon?: any;
        application_id?: any;
        discovery_splash?: any;
        threads: Thread[];
        nsfw_level: number;
        mfa_level: number;
        splash?: any;
        hub_type?: any;
        explicit_content_filter: number;
        premium_tier: number;
        owner_id: string;
        rules_channel_id: string;
        description?: any;
        voice_states: any[];
        stickers: Sticker[];
        default_message_notifications: number;
        unavailable: boolean;
        afk_timeout: number;
        emojis: any[];
        guild_hashes: GuildHashes;
        vanity_url_code?: any;
        name: string;
        guild_scheduled_events: any[];
        embedded_activities: any[];
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

