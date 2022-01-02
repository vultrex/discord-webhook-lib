import {Request} from "./Request";
import {EmbedObject} from "../Typings/EmbedInterface";

export class WebhookClient {
    public id: string;
    public token: string;
    public username?: string | null;
    public avatar_url?: string | null;
    private request: Request
    constructor(ops = {
        id: null as unknown as string,
        token: null as unknown as string,
        username: null as unknown as string | null,
        avatar_url: null as unknown as string
    }) {
        this.id = ops.id;
        this.token = ops.token;
        this.username = ops.username;
        this.avatar_url = ops.avatar_url;
        this.request = new Request;
    }

    public async send(msg: string, embeds?: EmbedObject): Promise<any> {
        let e: any[] = [];
        if (embeds) {
            e = [embeds]
        }

        if (typeof msg !=="string") throw new ReferenceError('msg must be a string')
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