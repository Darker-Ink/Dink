declare module GuildRoleUpdate {

    export interface Tags {
        bot_id: string;
    }

    export interface Role {
        version: number;
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
        description?: any;
        color: number;
    }

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

    export interface D {
        role: Role;
        hashes: Hashes;
        guild_hashes: GuildHashes;
        guild_id: string;
    }

    export interface RootObject {
        t: string;
        s: number;
        op: number;
        d: D;
    }

}

