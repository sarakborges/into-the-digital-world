import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld011 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/011.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld010 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts('ITDW_010'),

    actions: [
      {
        id: 'ITDW_010_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld011)
        }
      }
    ]
  }
}
