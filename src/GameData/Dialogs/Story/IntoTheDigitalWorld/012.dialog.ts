import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld012 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_012'),

    actions: [
      {
        id: 'ITDW_012_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld013)
        }
      }
    ]
  }
}
