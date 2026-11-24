import type { DialogType } from '@/Types/Dialog.type'

import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld023 = {
  text: getTexts('ITDW_023'),

  actions: [
    {
      id: 'ITDW_023_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(FashionIntroduction)
      }
    }
  ]
} satisfies DialogType
