import type { DialogType } from '@/Types/Dialog.type'

import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld028 = {
  text: getTexts('ITDW_028'),

  actions: [
    {
      id: 'ITDW_028_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(FashionIntroduction)
      }
    }
  ]
} satisfies DialogType
