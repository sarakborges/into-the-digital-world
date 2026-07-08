import * as EnDialogs from '@/GameData/Dialogs/En'
import * as EnTexts from '@/GameData/Texts/En'

import { useSettingsStore } from '@/Stores/Settings.store'

export const getTranslation = (
  key: string,
  replace?: Record<string, string>
): string => {
  const defaultLanguage = 'en'

  const translations = {
    en: { ...EnDialogs, ...EnTexts }
  }

  const settings = useSettingsStore.getState().settings
  const lang = settings?.language || defaultLanguage

  let value = translations[lang][key]

  if (!value) {
    return ''
  }

  if (!replace) {
    return value
  }

  for (const replaceKey of Object.keys(replace)) {
    value = value.replaceAll(replaceKey, replace[replaceKey])
  }

  return value
}
