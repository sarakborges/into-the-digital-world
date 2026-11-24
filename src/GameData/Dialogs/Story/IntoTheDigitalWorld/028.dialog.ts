import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld029 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/033.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld028 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_028'),

    actions: [
      {
        id: 'ITDW_028_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld029)
        }
      }
    ]
  }
}
