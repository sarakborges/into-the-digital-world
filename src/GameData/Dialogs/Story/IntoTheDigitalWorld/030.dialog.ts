import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld031 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/031.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld030 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_030'),

    actions: [
      {
        id: 'ITDW_030_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld031)
        }
      }
    ]
  }
}
