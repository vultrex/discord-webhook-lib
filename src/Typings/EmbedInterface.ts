export interface EmbedObject {
    title: string,
    description: string,
    url: string,
    timestamp: string,
    color: string | number,
    footer: EmbedFooterStructure,
    image: EmbedImageStructure,
    thumbnail: EmbedThumbnailStructure,
    video: EmbedVideoStructure,
    provider: EmbedProviderStructure,
    author: EmbedAuthorStructure,
    fields: EmbedFeildStructure
}

export interface EmbedThumbnailStructure {
    url: string,
    proxy_url: string,
    height: string | number,
    width: string | number
}

export interface EmbedVideoStructure {
    url: string,
    proxy_url: string,
    height: string | number,
    width: string | number,
}

export interface EmbedProviderStructure {
    name: string,
    url: string
}

export interface EmbedAuthorStructure {
    name: string,
    url: string,
    icon_url: string,
    proxy_icon_url: string,
}

export interface EmbedFooterStructure {
    text: string,
    icon_url?: string,
    proxy_icon_url?: string,
}

export interface EmbedFeildStructure {
    name: string,
    value: string,
    inline: boolean
}

export interface EmbedImageStructure {
    url: string,
    proxy_url?: string,
    height?: number,
    width?: number
}