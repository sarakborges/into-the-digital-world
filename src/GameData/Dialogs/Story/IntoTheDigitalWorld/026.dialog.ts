import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld027 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/027.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld026 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_026'),

    actions: [
      {
        id: 'ITDW_026_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld027)
        }
      }
    ]
  }
}
