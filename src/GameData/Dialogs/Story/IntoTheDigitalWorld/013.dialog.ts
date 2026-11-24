import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld014 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/017.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld013 = {
  text: getTexts('ITDW_013'),

  actions: [
    {
      id: 'ITDW_013_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld014())
      }
    }
  ]
} satisfies DialogType
