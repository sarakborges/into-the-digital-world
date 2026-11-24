import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld017 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/017.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld016 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_016'),

    actions: [
      {
        id: 'ITDW_016_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld017)
        }
      }
    ]
  }
}
