import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld015 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/015.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld014 = {
  text: getTexts('ITDW_014'),

  actions: [
    {
      id: 'ITDW_014_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld015())
      }
    }
  ]
} satisfies DialogType
