import { loadData } from '@/Helpers/loadData.helper'

import * as EnTexts from '@/GameData/Texts/En.text'
import * as PtTexts from '@/GameData/Texts/Pt.text'
import * as RsTexts from '@/GameData/Texts/Rs.text'

const defaultLanguage = 'en-us'

export const getTexts = (textKey) => {
  const texts = {
    'en-us': EnTexts,
    'pt-br': PtTexts,
    rs: RsTexts
  }

  const settings = loadData({ key: 'settings' })
  const lang = settings?.language || defaultLanguage

  if (!texts[lang]) {
    return `Text "${textKey}" not found in default language.`
  }

  if (!texts[lang || defaultLanguage][textKey]) {
    return `Text "${textKey}" not found in lang "${lang}".`
  }

  return texts[lang][textKey]
}
