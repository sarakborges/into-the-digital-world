import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld018 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/018.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld017 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_017'),

    actions: [
      {
        id: 'ITDW_017_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld018)
        }
      }
    ]
  }
}
