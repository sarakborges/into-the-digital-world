import { loadData } from '@/Systems/Profile/loadData.helper'

import * as EnDialogs from '@/GameData/Dialogs/En'

const defaultLanguage = 'en'

export const getDialogs = (dialogKey) => {
  const dialogs = {
    en: EnDialogs
  }

  const settings = loadData({ key: 'settings' })
  const lang = settings?.language || defaultLanguage

  if (!dialogs[lang]) {
    return `Dialog "${dialogKey}" not found in default language.`
  }

  if (!dialogs[lang || defaultLanguage][dialogKey]) {
    return `Dialog "${dialogKey}" not found in lang "${lang}".`
  }

  return dialogs[lang][dialogKey]
}
