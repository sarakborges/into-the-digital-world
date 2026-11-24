import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld013 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/013.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { getChoice } from '@/Helpers/Systems/Profile/getChoice.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld012 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts(`ITDW_012_${choice.toUpperCase()}`, {
      '[NAME]': profile.name
    }),

    actions: [
      {
        id: 'ITDW_012_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld013())
        }
      }
    ]
  }
}
