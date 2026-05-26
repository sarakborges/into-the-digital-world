import { loadData } from '@/Helpers/loadData.helper'

import { IntroductionDialogs } from '@/GameData/Dialogs/Introduction'
import { AvatarCustomizationDialogs } from '@/GameData/Dialogs/AvatarCustomization'
import { GetStarterDigimonDialogs } from '@/GameData/Dialogs/GetStarterDigimon'
import { SaveGameDialogs } from '@/GameData/Dialogs/SaveGame'
import { LogoffDialogs } from '@/GameData/Dialogs/Logoff'
import { BattleDialogs } from '@/GameData/Dialogs/Battle'
import { RenamePartnerDialogs } from '@/GameData/Dialogs/RenamePartner'

const dialogs = {
  IntroductionDialogs,
  AvatarCustomizationDialogs,
  SaveGameDialogs,
  LogoffDialogs,
  GetStarterDigimonDialogs,
  BattleDialogs,
  RenamePartnerDialogs
}

const EnDialogs = {
  SCENES_CONTINUE_BUTTON: `Continue`,
  SCENES_CONFIRM_BUTTON: `Confirm`,
  SCENES_LEAVE_BUTTON: `Leave`,
  SCENES_BACK_BUTTON: `Go back`,
  SCENES_CANCEL_BUTTON: `Cancel`,

  ...Object.keys(dialogs).reduce(
    (prev, cur) => ({ ...prev, ...dialogs[cur].En }),
    {}
  )
}

// const PtDialogs = {
//   SCENES_CONTINUE_BUTTON: `Continuar`,
//   SCENES_CONFIRM_BUTTON: `Confirmar`,
//   SCENES_LEAVE_BUTTON: `Sair`,
//   SCENES_BACK_BUTTON: `Voltar`,

// ...Object.keys(dialogs).reduce(
//     (prev, cur) => ({ ...prev, ...dialogs[cur].Pt }),
//     {}
//   )
// }

// const RsDialogs = {
//   SCENES_CONTINUE_BUTTON: `Vamo dale`,
//   SCENES_CONFIRM_BUTTON: `Certo que sim`,
//   SCENES_LEAVE_BUTTON: `Vazare`,
//   SCENES_BACK_BUTTON: `Calma lá`

// ...Object.keys(dialogs).reduce(
//     (prev, cur) => ({ ...prev, ...dialogs[cur].Rs }),
//     {}
//   )
// }

const defaultLanguage = 'en-us'

export const getDialogs = (textKey) => {
  const texts = {
    'en-us': EnDialogs
    // 'pt-br': PtDialogs,
    // rs: RsDialogs
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
