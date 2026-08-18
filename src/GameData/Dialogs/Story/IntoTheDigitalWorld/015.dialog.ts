import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld016 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/016.dialog'

import { getTexts } from '@/Helpers/Language'
import { getProfileName } from '@/Helpers/Systems/Profile'

import { useDialogStore } from '@/Stores/Dialog.store'

export const getIntoTheDigitalWorld015 = (): DialogType => {
  const profileName = getProfileName()

  return {
    speaker: {
      id: 'player',
      name: profileName
    },

    text: getTexts('ITDW_015'),

    actions: [
      {
        id: 'ITDW_015_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()

          setDialog(IntoTheDigitalWorld016)
        }
      }
    ]
  }
}
