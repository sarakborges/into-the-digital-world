import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld025 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/025.dialog'

import { getTexts } from '@/Helpers/Language'
import { getProfileName } from '@/Helpers/Systems/Profile'

import { useDialogStore } from '@/Stores/Dialog.store'

export const getIntoTheDigitalWorld024 = (): DialogType => {
  const profileName = getProfileName()

  return {
    speaker: {
      id: 'player',
      name: profileName
    },

    text: getTexts('ITDW_024'),

    actions: [
      {
        id: 'ITDW_024_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()

          setDialog(IntoTheDigitalWorld025)
        }
      }
    ]
  }
}
