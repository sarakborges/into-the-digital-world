import { loadData } from '@/Helpers/loadData.helper'

import { IntroductionDialogs } from '@/GameData/Dialogs/Introduction'
import { AvatarCustomizationDialogs } from '@/GameData/Dialogs/AvatarCustomization'
import { GetStarterDigimonDialogs } from '@/GameData/Dialogs/GetStarterDigimon'
import { SaveGameDialogs } from '@/GameData/Dialogs/SaveGame'
import { LogoffDialogs } from '@/GameData/Dialogs/Logoff'
import { ProfileDialogs } from '@/GameData/Dialogs/Profile'
import { AcquintancesDialogs } from '@/GameData/Dialogs/Acquintances'
import { EncyclopediaDialogs } from '@/GameData/Dialogs/Encyclopedia'
import { BattleDialogs } from '@/GameData/Dialogs/Battle'

const EnDialogs = {
  SCENES_CONTINUE_BUTTON: `Continue`,
  SCENES_CONFIRM_BUTTON: `Confirm`,
  SCENES_LEAVE_BUTTON: `Leave`,
  SCENES_BACK_BUTTON: `Go back`,

  ...IntroductionDialogs.En,
  ...AvatarCustomizationDialogs.En,
  ...SaveGameDialogs.En,
  ...LogoffDialogs.En,
  ...GetStarterDigimonDialogs.En,
  ...ProfileDialogs.En,
  ...AcquintancesDialogs.En,
  ...EncyclopediaDialogs.En,
  ...BattleDialogs.En
}

const PtDialogs = {
  SCENES_CONTINUE_BUTTON: `Continuar`,
  SCENES_CONFIRM_BUTTON: `Confirmar`,
  SCENES_LEAVE_BUTTON: `Sair`,
  SCENES_BACK_BUTTON: `Voltar`
}

const RsDialogs = {
  SCENES_CONTINUE_BUTTON: `Vamo dale`,
  SCENES_CONFIRM_BUTTON: `Certo que sim`,
  SCENES_LEAVE_BUTTON: `Vazare`,
  SCENES_BACK_BUTTON: `Calma lá`
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
