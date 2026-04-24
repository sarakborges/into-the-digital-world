import { loadData } from '@/Helpers/loadData.helper'

import * as EnTexts from '@/Texts/Texts/En.text'
import * as EnDialogs from '@/Texts/Dialogs/En.text'

import * as PtTexts from '@/Texts/Texts/Pt.text'
import * as PtDialogs from '@/Texts/Dialogs/Pt.text'

export const getTexts = (textKey) => {
  const texts = {
    'en-us': EnTexts,
    'pt-br': PtTexts
  }

  const settings = loadData({ key: 'settings' })
  const lang = settings?.lang || 'en-us'

  if (!texts[lang]) {
    return `Text "${textKey}" not found in default language.`
  }

  if (!texts[lang || 'en-us'][textKey]) {
    return `Text "${textKey}" not found in lang "${lang}".`
  }

  return texts[lang][textKey]
}

export const getDialog = (textKey) => {
  const texts = {
    'en-us': EnDialogs,
    'pt-br': PtDialogs
  }

  const settings = loadData({ key: 'settings' })
  const lang = settings?.lang || 'en-us'

  if (!texts[lang]) {
    return `Text "${textKey}" not found in default language.`
  }

  if (!texts[lang || 'en-us'][textKey]) {
    return `Text "${textKey}" not found in lang "${lang}".`
  }

  return texts[lang][textKey]
}
