import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld024 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/024.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld023 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_023'),

    actions: [
      {
        id: 'ITDW_023_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld024)
        }
      }
    ]
  }
}
