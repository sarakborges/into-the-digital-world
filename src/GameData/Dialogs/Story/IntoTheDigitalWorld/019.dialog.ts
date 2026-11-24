import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld020 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/020.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

export const IntoTheDigitalWorld019 = {
  text: getTexts('ITDW_019'),

  actions: [
    {
      id: 'ITDW_019_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(getIntoTheDigitalWorld020())
      }
    }
  ]
} satisfies DialogType
