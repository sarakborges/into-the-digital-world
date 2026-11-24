import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld028 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/027.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld027 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_027'),

    actions: [
      {
        id: 'ITDW_027_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld028)
        }
      }
    ]
  }
}
