export interface FormatMessage {
    (id: string, defaultMessage?: string, description?: string | object): string
}