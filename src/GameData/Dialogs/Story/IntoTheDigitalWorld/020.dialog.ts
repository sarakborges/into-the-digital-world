import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld021 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/024.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld020 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_020'),

    actions: [
      {
        id: 'ITDW_020_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld021)
        }
      }
    ]
  }
}
