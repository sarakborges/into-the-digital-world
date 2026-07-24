export const LANGUAGES = ['en'] as const

export type LanguageId = (typeof LANGUAGES)[number]
