import fetch from "cross-fetch";

export class Request {
    private api: string;

    constructor() {
        this.api = 'https://discordapp.com/api/webhooks';
    };

    async req(opt: RequestOptions): Promise<any> {

        const request = {
            method: opt.method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        const data = (opt.data) ? JSON.stringify(opt.data) : {};

        if (opt.method !== "GET") {
            if (opt.method !== "DELETE") {
                // @ts-ignore
                request["body"] = data;
            };
        };
        console.log(this.api + opt.endpoint)

        return new Promise(async (resolve, reject) => {
            return fetch(this.api + opt.endpoint, request).then((x) => {
                x.json().then((res) => {
                    return resolve(res);
                }).catch(() => {
                    resolve(null);
                });
            });
        });
    };
};

interface RequestOptions {
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    endpoint: string;
    data?: any;
};