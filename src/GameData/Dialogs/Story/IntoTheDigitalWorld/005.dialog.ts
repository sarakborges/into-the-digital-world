import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld006 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/006.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld005 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_005'),

    actions: [
      {
        id: 'ITDW_005_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld006)
        }
      }
    ]
  }
}
