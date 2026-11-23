import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld002 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/002.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs/changeDialog.helper'

import { SkipIntroductionToName } from '@/Components/DialogContent/SkipIntroductionToName'

export const IntoTheDigitalWorld001 = {
  text: getTexts('ITDW_001'),

  content: <SkipIntroductionToName />,

  actions: [
    {
      id: 'ITDW_001_CONTINUE',

      text: getTexts('SCENES_CONTINUE_BUTTON'),

      onClick: () => {
        changeDialog(IntoTheDigitalWorld002)
      }
    }
  ]
} satisfies DialogType
