import { loadData } from '@/Helpers/loadData.helper'

import * as IntroductionEn from '@/GameData/Dialogs/Introduction/En.text'
import * as IntroductionPt from '@/GameData/Dialogs/Introduction/Pt.text'

import * as AvatarCustomizationEn from '@/GameData/Dialogs/AvatarCustomization/En.text'
import * as AvatarCustomizationPt from '@/GameData/Dialogs/AvatarCustomization/Pt.text'

const EnDialogs = {
  SCENES_CONTINUE_BUTTON: `Continue`,
  SCENES_CONFIRM_BUTTON: `Confirm`,
  SCENES_LEAVE_BUTTON: `Leave`,
  SCENES_BACK_BUTTON: `Go back`,

  ...IntroductionEn,
  ...AvatarCustomizationEn
}

const PtDialogs = {
  SCENES_CONTINUE_BUTTON: `Continuar`,
  SCENES_CONFIRM_BUTTON: `Confirmar`,
  SCENES_LEAVE_BUTTON: `Sair`,
  SCENES_BACK_BUTTON: `Voltar`,

  ...IntroductionPt,
  ...AvatarCustomizationPt
}

const defaultLanguage = 'en-us'

export const getDialogs = (textKey) => {
  const texts = {
    'en-us': EnDialogs,
    'pt-br': PtDialogs
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
