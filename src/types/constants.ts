import * as constants from '../constants';
import { GatewayOpcodes, GatewayDispatchEvents, GatewayIntentBits } from 'discord-api-types/v10'

export {}

export type GatewayBits = {
    [key in keyof typeof GatewayIntentBits]: typeof GatewayIntentBits[key] extends number ? typeof GatewayIntentBits[key] : never
}

export type GatewayOpCodes = {
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

declare global {}