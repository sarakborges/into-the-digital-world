import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld018 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/018.dialog'

import { getTexts } from '@/Helpers/Language'
import { getProfileName } from '@/Helpers/Systems/Profile'

import { useDialogStore } from '@/Stores/Dialog.store'

export const getIntoTheDigitalWorld017 = (): DialogType => {
  const profileName = getProfileName()

  return {
    speaker: {
      id: 'player',
      name: profileName
    },

    text: getTexts('ITDW_017'),

    actions: [
      {
        id: 'ITDW_017_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()

          setDialog(IntoTheDigitalWorld018)
        }
      }
    ]
  }
}
