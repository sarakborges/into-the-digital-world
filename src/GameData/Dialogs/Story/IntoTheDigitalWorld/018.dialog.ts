import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld019 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/019.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld018 = {
  text: getTexts('ITDW_018'),

  actions: [
    {
      id: 'ITDW_018_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld019())
      }
    }
  ]
} satisfies DialogType
