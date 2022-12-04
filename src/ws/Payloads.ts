import { OpCodes } from "../constants";
import { WS } from "./WS";

export class Payloads {
    ws: WS;
    constructor(Ws: WS) {
        this.ws = Ws
    }

    identify() {
        return JSON.stringify({
            op: OpCodes.Identify,
            d: {
                token: this.ws.token,
                properties: {
                    $os: process.platform,
                    $browser: 'DinkJS',
                    $device: 'DinkJS',
                },
                intents: this.ws.intents,
            }
        });
    }

    resume() {
        return JSON.stringify({
            op: OpCodes.Resume,
            d: {
                token: this.ws.token,
                session_id: this.ws.sessionID,
                seq: this?.ws?.lastEvent?.s || 0,
            }
        });
    }

    heartbeat() {
        return JSON.stringify({
            op: OpCodes.Heartbeat,
            d: this.ws?.lastEvent?.s || null,
        });
    }
}