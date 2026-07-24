export const LANGUAGES = ['en'] as const

export type LanguageId = (typeof LANGUAGES)[number]

const LANGUAGE_IDS = new Set<string>(LANGUAGES)

export const isLanguageId = (language: string): language is LanguageId =>
  LANGUAGE_IDS.has(language)
