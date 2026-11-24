import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld020 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/019.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld019 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_019'),

    actions: [
      {
        id: 'ITDW_019_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld020())
        }
      }
    ]
  }
}
