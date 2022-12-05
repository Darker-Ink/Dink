export interface Recipient {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration?: any;
    discriminator: string;
    public_flags: number;
}

export interface DmData {
    id: string;
    type: number;
    last_message_id: string;
    flags: number;
    recipients: Recipient[];
}