import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld034 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/034.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld033 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_033'),

    actions: [
      {
        id: 'ITDW_033_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld034)
        }
      }
    ]
  }
}
