import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld036 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/036.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld035 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_035'),

    actions: [
      {
        id: 'ITDW_035_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld036)
        }
      }
    ]
  }
}
