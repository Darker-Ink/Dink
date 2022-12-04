declare module PresenceUpdate {

    export interface User {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar: string;
    }

    export interface ClientStatus {
        web: string;
    }

    export interface Emoji {
        name: string;
        id: string;
        animated: boolean;
    }

    export interface Activity {
        type: number;
        state: string;
        name: string;
        id: string;
        emoji: Emoji;
        created_at: number;
    }

    export interface PresenceUpdatePayload {
        user: User;
        status: string;
        guild_id: string;
        client_status: ClientStatus;
        activities: Activity[];
    }
}
