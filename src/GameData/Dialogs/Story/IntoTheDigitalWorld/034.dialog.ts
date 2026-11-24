import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld035 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/035.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld034 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_034'),

    actions: [
      {
        id: 'ITDW_034_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld035)
        }
      }
    ]
  }
}
