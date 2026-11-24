import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld030 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/030.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld029 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_029'),

    actions: [
      {
        id: 'ITDW_029_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld030)
        }
      }
    ]
  }
}
