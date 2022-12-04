import { GatewayBits, GatewayOpCodes } from './types/constants';
import { version } from '../package.json'

export const DiscordApiVersion: string = "10" // The API & Websocket version
export const SelfVersion: string = version;
export const UserAgent: string = `DinkJs/${SelfVersion} (NodeJS ${process.version})`

export const OpCodes: GatewayOpCodes = {
    Dispatch: 0,
    Heartbeat: 1,
    Identify: 2,
    PresenceUpdate: 3,
    VoiceStateUpdate: 4,
    Resume: 6,
    Reconnect: 7,
    RequestGuildMembers: 8,
    InvalidSession: 9,
    Hello: 10,
    HeartbeatAck: 11,
}

export const OpCloseCodes = {
    UNKNOWN_ERROR: 4000,
    UNKNOWN_OPCODE: 4001,
    DECODE_ERROR: 4002,
    NOT_AUTHENTICATED: 4003,
    AUTHENTICATION_FAILED: 4004,
    ALREADY_AUTHENTICATED: 4005,
    INVALID_SEQUENCE: 4007,
    RATE_LIMITED: 4008,
    SESSION_TIMED_OUT: 4009,
    INVALID_SHARD: 4010,
    SHARDING_REQUIRED: 4011,
    INVALID_API_VERSION: 4012,
    INVALID_GatewayIntents: 4013,
    DISALLOWED_GatewayIntents: 4014,
}

export const GatewayUrl: string = `wss://gateway.discord.gg/?v=${DiscordApiVersion}&encoding=json`
export const ApiUrl: string = `https://discord.com/api/v${DiscordApiVersion}`
export const CdnUrl: string = `https://cdn.discordapp.com`

export const CdnEndpoints = {
    avatar: (id: string, hash: string, format: string = 'webp', size: number = 128) => `${CdnUrl}/avatars/${id}/${hash}.${format}?size=${size}`,
    emoji: (id: string, format: string = 'png') => `${CdnUrl}/emojis/${id}.${format}`,
    defaultUserAvatar: (discriminator: number) => `${CdnUrl}/embed/avatars/${discriminator % 5}.png`,
    banner: (id: string, hash: string, format: string = 'webp', size: number = 128) => `${CdnUrl}/banners/${id}/${hash}.${format}?size=${size}`,
    guildIcon: (id: string, hash: string, format: string = 'webp', size: number = 128) => `${CdnUrl}/icons/${id}/${hash}.${format}?size=${size}`,
}

export const ApiEndpoints = {
    channel: (id: string) => `${ApiUrl}/channels/${id}`,
    channelMessages: (id: string) => `${ApiUrl}/channels/${id}/messages`,
    channelMessage: (channelId: string, messageId: string) => `${ApiUrl}/channels/${channelId}/messages/${messageId}`,
}

export const Colors = {
    DEFAULT: 0x000000,
    WHITE: 0xffffff,
    AQUA: 0x1abc9c,
    GREEN: 0x57f287,
    BLUE: 0x3498db,
    YELLOW: 0xfee75c,
    PURPLE: 0x9b59b6,
    LUMINOUS_VIVID_PINK: 0xe91e63,
    FUCHSIA: 0xeb459e,
    GOLD: 0xf1c40f,
    ORANGE: 0xe67e22,
    RED: 0xed4245,
    GREY: 0x95a5a6,
    NAVY: 0x34495e,
    DARK_AQUA: 0x11806a,
    DARK_GREEN: 0x1f8b4c,
    DARK_BLUE: 0x206694,
    DARK_PURPLE: 0x71368a,
    DARK_VIVID_PINK: 0xad1457,
    DARK_GOLD: 0xc27c0e,
    DARK_ORANGE: 0xa84300,
    DARK_RED: 0x992d22,
    DARK_GREY: 0x979c9f,
    DARKER_GREY: 0x7f8c8d,
    LIGHT_GREY: 0xbcc0c0,
    DARK_NAVY: 0x2c3e50,
    BLURPLE: 0x5865f2,
    GREYPLE: 0x99aab5,
    DARK_BUT_NOT_BLACK: 0x2c2f33,
    NOT_QUITE_BLACK: 0x23272a,
};

export const GatewayIntents: GatewayBits & {
    All?: number;
} = {
    Guilds: 1,
    GuildMembers: 2,
    GuildBans: 4,
    GuildEmojisAndStickers: 8,
    GuildIntegrations: 16,
    GuildWebhooks: 32,
    GuildInvites: 64,
    GuildVoiceStates: 128,
    GuildPresences: 256,
    GuildMessages: 512,
    GuildMessageReactions: 1024,
    GuildMessageTyping: 2048,
    DirectMessages: 4096,
    DirectMessageReactions: 8192,
    DirectMessageTyping: 16384,
    MessageContent: 32768,
    GuildScheduledEvents: 65536,
    AutoModerationConfiguration: 1048576,
    AutoModerationExecution: 2097152,
}

GatewayIntents.All = Object.values(GatewayIntents).reduce((a: number, b: number) => a | b, 0);

export const GatewayEvents = {
    READY: 'Ready',
    APPLICATION_COMMAND_PERMISSIONS_UPDATE: 'ApplicationCommandPermissionsUpdate',
    CHANNEL_CREATE: 'ChannelCreate',
    CHANNEL_DELETE: 'ChannelDelete',
    CHANNEL_PINS_UPDATE: 'ChannelPinsUpdate',
    CHANNEL_UPDATE: 'ChannelUpdate',
    GUILD_BAN_ADD: 'GuildBanAdd',
    GUILD_BAN_REMOVE: 'GuildBanRemove',
    GUILD_CREATE: 'GuildCreate',
    GUILD_DELETE: 'GuildLeave', // guildDelete
    GUILD_EMOJIS_UPDATE: 'GuildEmojisUpdate',
    GUILD_INTEGRATIONS_UPDATE: 'GuildIntegrationsUpdate',
    GUILD_MEMBER_ADD: 'GuildMemberAdd',
    GUILD_MEMBER_REMOVE: 'GuildMemberRemove',
    GUILD_MEMBER_UPDATE: 'GuildMemberUpdate',
    GUILD_MEMBERS_CHUNK: 'GuildMembersChunk',
    GUILD_ROLE_CREATE: 'GuildRoleCreate',
    GUILD_ROLE_DELETE: 'GuildRoleDelete',
    GUILD_ROLE_UPDATE: 'GuildRoleUpdate',
    GUILD_UPDATE: 'GuildUpdate',
    GUILD_STICKERS_UPDATE: 'GuildStickersUpdate',
    INTEGRATION_CREATE: 'IntegrationCreate',
    INTEGRATION_DELETE: 'IntegrationDelete',
    INTEGRATION_UPDATE: 'IntegrationUpdate',
    INTERACTION_CREATE: 'InteractionCreate',
    INVITE_CREATE: 'InviteCreate',
    INVITE_DELETE: 'InviteDelete',
    MESSAGE_CREATE: 'MessageCreate',
    MESSAGE_DELETE: 'MessageDelete',
    MESSAGE_DELETE_BULK: 'MessageDeleteBulk',
    MESSAGE_REACTION_ADD: 'MessageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'MessageReactionRemove',
    MESSAGE_REACTION_REMOVE_ALL: 'MessageReactionRemoveAll',
    MESSAGE_REACTION_REMOVE_EMOJI: 'MessageReactionRemoveEmoji',
    MESSAGE_UPDATE: 'MessageUpdate',
    PRESENCE_UPDATE: 'PresenceUpdate',
    STAGE_INSTANCE_CREATE: 'StageInstanceCreate',
    STAGE_INSTANCE_DELETE: 'StageInstanceDelete',
    STAGE_INSTANCE_UPDATE: 'StageInstanceUpdate',
    THREAD_CREATE: 'ThreadCreate',
    THREAD_DELETE: 'ThreadDelete',
    THREAD_LIST_SYNC: 'ThreadListSync',
    THREAD_MEMBER_UPDATE: 'ThreadMemberUpdate',
    THREAD_MEMBERS_UPDATE: 'ThreadMembersUpdate',
    THREAD_UPDATE: 'ThreadUpdate',
    TYPING_START: 'TypingStart',
    USER_UPDATE: 'UserUpdate',
    VOICE_STATE_UPDATE: 'VoiceStateUpdate',
    VOICE_SERVER_UPDATE: 'VoiceServerUpdate',
    WEBHOOKS_UPDATE: 'WebhooksUpdate',
    GUILD_SCHEDULED_EVENT_CREATE: 'GuildScheduledEventCreate',
    GUILD_SCHEDULED_EVENT_DELETE: 'GuildScheduledEventDelete',
    GUILD_SCHEDULED_EVENT_UPDATE: 'GuildScheduledEventUpdate',
    GUILD_SCHEDULED_EVENT_USER_ADD: 'GuildScheduledEventUserAdd',
    GUILD_SCHEDULED_EVENT_USER_REMOVE: 'GuildScheduledEventUserRemove',
    AUTO_MODERATION_RULE_CREATE: 'AutoModerationRuleCreate',
    AUTO_MODERATION_RULE_DELETE: 'AutoModerationRuleDelete',
    AUTO_MODERATION_RULE_UPDATE: 'AutoModerationRuleUpdate',
    AUTO_MODERATION_ACTION_EXECUTION: 'AutoModerationActionExecution',
}

export const Status = {
    WAITING_ON_GUILDS: 'guilds',
    WAITING_ON_MEMBERS: 'members',
    READY: 'ready',
}