import { GatewayDispatchEvents } from 'discord-api-types/v10';
import { OpCodes } from '../constants';

export {}

declare global {

    export type GatewayPayload = {
        t?: typeof GatewayDispatchEvents[keyof typeof GatewayDispatchEvents];
        s?: number | null;
        op: typeof OpCodes[keyof typeof OpCodes];
        d?: any;
    }
}