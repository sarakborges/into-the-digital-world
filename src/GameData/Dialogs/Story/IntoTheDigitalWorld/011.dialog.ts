import type { DialogType } from '@/Types/Dialog.type'

import { getIntoTheDigitalWorld012 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/012.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

export const getIntoTheDigitalWorld011 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  const choice =
    profile.meaningfulChoices?.['INTO_THE_DIGITAL_WORLD_NAME_REACTION']

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    speaker: {
      id: 'player',
      name: profile.name
    },

    text: getTexts(`ITDW_011_${choice.toUpperCase()}`, {
      '[NAME]': profile.name
    }),

    actions: [
      {
        id: 'ITDW_011_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(getIntoTheDigitalWorld012())
        }
      }
    ]
  }
}
