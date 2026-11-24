import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld019 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/019.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld018 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_018'),

    actions: [
      {
        id: 'ITDW_018_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld019)
        }
      }
    ]
  }
}
