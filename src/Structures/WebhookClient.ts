import {Request} from "./Request";

export class WebhookClient {
    public id?: string;
    public token?: string;
    public username?: string | null;
    public avatar_url?: string | null;
    private request: Request
    constructor(ops: any) {
        this.id = ops.id;
        this.token = ops.token;
        this.username = ops.username;
        this.avatar_url = ops.avatar_url;
        this.request = new Request;
    }

    public async send(msg: string, embeds?: any): Promise<any> {
        let e: any[] = [];
        if (embeds) {
            e = [embeds]
        }
        await this.request.req({
            method: 'POST',
            endpoint: `/${this.id}/${this.token}`,
            data: {
                username: this.username,
                avatar_url: this.avatar_url,
                content: msg,
                embeds: e
            }
        })
    }
}