import {
    EmbedAuthorStructure,
    EmbedFeildStructure,
    EmbedObject,
    EmbedProviderStructure,
    EmbedImageStructure,
    EmbedVideoStructure,
    EmbedThumbnailStructure,
    EmbedFooterStructure
} from "../Typings/EmbedInterface";

export class Embed {
    public data: EmbedObject = Object.assign({});
    constructor() {}

    setTitle(title: string, url: string): this {
        if(title) this.data.title = title;
        if(url) this.data.url = url
        return this
    }

    setDescription(description?: string): this {
        this.data.description = description;
        return this
    }

    setURL(url: string): this {
        this.data.url = url;
        return this
    }

    setTimeStamp(): this {
        this.data.timestamp;
        return this
    }

    setColor(color: number): this {
        this.data.color = color
        return this
    }

    setFooter(footer: EmbedFooterStructure): this {
        this.data.footer = footer
        return this
    }

    setImage(image: EmbedImageStructure): this {
        this.data.image = image
        return this
    }

    setThumbnail(thumbnail: EmbedThumbnailStructure): this {
        this.data.thumbnail = thumbnail
        return this
    }

    setVideo(video: EmbedVideoStructure): this {
        this.data.video = video
        return this
    }

    setProvider(provider: EmbedProviderStructure): this {
        this.data.provider = provider
        return this
    }

    setAuthor(author: EmbedAuthorStructure): this {
        this.data.author = author;
        return this
    }

    setFields(fields: EmbedFeildStructure): this {
        this.data.fields = fields;
        return this
    }

    toJSON(): EmbedObject {
        return this.data
    }
}