import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld012 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/012.dialog'

import { getTexts } from '@/Helpers/Language'
import { getChoice, getProfileName } from '@/Helpers/Systems/Profile'

import { useDialogStore } from '@/Stores/Dialog.store'

export const getIntoTheDigitalWorld011 = (): DialogType => {
  const profileName = getProfileName()
  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: 'player',
      name: profileName
    },

    text: getTexts(`ITDW_011_${choice.toUpperCase()}`, {
      '[NAME]': profileName
    }),

    actions: [
      {
        id: 'ITDW_011_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          const { setDialog } = useDialogStore.getState()

          setDialog(getIntoTheDigitalWorld012())
        }
      }
    ]
  }
}
