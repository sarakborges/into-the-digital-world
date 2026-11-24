import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld022 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/022.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld021 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_021'),

    actions: [
      {
        id: 'ITDW_021_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld022())
        }
      }
    ]
  }
}
