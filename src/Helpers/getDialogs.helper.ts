import { loadData } from '@/Helpers/loadData.helper'

import * as IntroductionEn from '@/GameData/Dialogs/Introduction/En.text'
import * as IntroductionPt from '@/GameData/Dialogs/Introduction/Pt.text'
import * as IntroductionRs from '@/GameData/Dialogs/Introduction/Rs.text'

import * as AvatarCustomizationEn from '@/GameData/Dialogs/AvatarCustomization/En.text'
import * as AvatarCustomizationPt from '@/GameData/Dialogs/AvatarCustomization/Pt.text'
import * as AvatarCustomizationRs from '@/GameData/Dialogs/AvatarCustomization/Rs.text'

import * as SaveGameEn from '@/GameData/Dialogs/SaveGame/En.text'
import * as SaveGamePt from '@/GameData/Dialogs/SaveGame/Pt.text'
import * as SaveGameRs from '@/GameData/Dialogs/SaveGame/Rs.text'

import * as LogoffEn from '@/GameData/Dialogs/Logoff/En.text'
import * as LogoffPt from '@/GameData/Dialogs/Logoff/Pt.text'
import * as LogoffRs from '@/GameData/Dialogs/Logoff/Rs.text'

import * as GetStarterDigimonEn from '@/GameData/Dialogs/GetStarterDigimon/En.text'
import * as GetStarterDigimonPt from '@/GameData/Dialogs/GetStarterDigimon/Pt.text'
import * as GetStarterDigimonRs from '@/GameData/Dialogs/GetStarterDigimon/Rs.text'

const EnDialogs = {
  SCENES_CONTINUE_BUTTON: `Continue`,
  SCENES_CONFIRM_BUTTON: `Confirm`,
  SCENES_LEAVE_BUTTON: `Leave`,
  SCENES_BACK_BUTTON: `Go back`,

  ...IntroductionEn,
  ...AvatarCustomizationEn,
  ...SaveGameEn,
  ...LogoffEn,
  ...GetStarterDigimonEn
}

const PtDialogs = {
  SCENES_CONTINUE_BUTTON: `Continuar`,
  SCENES_CONFIRM_BUTTON: `Confirmar`,
  SCENES_LEAVE_BUTTON: `Sair`,
  SCENES_BACK_BUTTON: `Voltar`,

  ...IntroductionPt,
  ...AvatarCustomizationPt,
  ...SaveGamePt,
  ...LogoffPt,
  ...GetStarterDigimonPt
}

const RsDialogs = {
  SCENES_CONTINUE_BUTTON: `Vamo dale`,
  SCENES_CONFIRM_BUTTON: `Certo que sim`,
  SCENES_LEAVE_BUTTON: `Vazare`,
  SCENES_BACK_BUTTON: `Calma lá`,

  ...IntroductionRs,
  ...AvatarCustomizationRs,
  ...SaveGameRs,
  ...LogoffRs,
  ...GetStarterDigimonRs
}

const defaultLanguage = 'en-us'

export const getDialogs = (textKey) => {
  const texts = {
    'en-us': EnDialogs,
    'pt-br': PtDialogs,
    rs: RsDialogs
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
