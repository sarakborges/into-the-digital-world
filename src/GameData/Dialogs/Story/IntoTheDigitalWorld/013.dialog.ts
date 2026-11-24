import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld014 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/014.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld013 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_013'),

    actions: [
      {
        id: 'ITDW_013_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld014)
        }
      }
    ]
  }
}
