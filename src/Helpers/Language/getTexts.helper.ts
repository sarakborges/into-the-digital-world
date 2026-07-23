import * as EnTexts from '@/GameData/Texts/En'

import { useSettingsStore } from '@/Stores/Settings.store'

const TRANSLATIONS = {
  en: EnTexts
}

type TranslationLanguage = keyof typeof TRANSLATIONS
type TranslationKey = keyof typeof EnTexts
type TranslationReplacement = string | number

const isTranslationLanguage = (
  language: string
): language is TranslationLanguage => {
  return language in TRANSLATIONS
}

const isTranslationKey = (key: string): key is TranslationKey => {
  return key in EnTexts
}

// This intentionally remains positional: translation calls read as key + replacements.
export const getTexts = (
  key: string,
  replace?: Record<string, TranslationReplacement>
): string => {
  const settings = useSettingsStore.getState().settings
  const lang = settings?.language || 'en'

  if (!isTranslationLanguage(lang) || !isTranslationKey(key)) {
    console.warn('Text not found!', key)
    return ''
  }

  const value = TRANSLATIONS[lang][key]

  if (!replace) {
    return value
  }

  return Object.keys(replace).reduce(
    (text, replaceKey) =>
      text.replaceAll(replaceKey, String(replace[replaceKey])),
    value
  )
}
