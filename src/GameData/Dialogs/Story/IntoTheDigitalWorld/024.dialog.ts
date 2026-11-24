import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld025 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/025.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld024 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_024'),

    actions: [
      {
        id: 'ITDW_024_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld025)
        }
      }
    ]
  }
}
