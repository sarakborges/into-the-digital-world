import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld012 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/012.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld011 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_011'),

    actions: [
      {
        id: 'ITDW_011_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld012)
        }
      }
    ]
  }
}
