import { loadData } from '@/Helpers/Systems/Profile'

import * as EnTexts from '@/GameData/Texts/En'

const defaultLanguage = 'en'

export const getTexts = (textKey) => {
  const texts = {
    en: EnTexts
  }

  const settings = loadData({ key: 'settings' })
  const lang = settings.language || defaultLanguage

  if (!texts[lang]) {
    return `Text "${textKey}" not found in default language.`
  }

  if (!texts[lang || defaultLanguage][textKey]) {
    return `Text "${textKey}" not found in lang "${lang}".`
  }

  return texts[lang][textKey]
}
