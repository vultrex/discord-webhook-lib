export interface ComponentObject {
    type: number,
    custom_id?: string,
    disabled?: boolean,
    style?: number,
    label?: string,
    emoji?: ComponentEmojiStructure,
    url?: string,
    options?: ComponentOptionStructure,
    placeholder?: string,
    min_values?: number,
    max_values?: number,
    components?: Array<ComponentObject>
}

export interface ComponentEmojiStructure {
    id: number,
    name: string | null,
    animated?: boolean
}

export interface ComponentOptionStructure {
    label: string,
    value: string,
    description?: string,
    emoji?: ComponentEmojiStructure,
    default?: boolean
}