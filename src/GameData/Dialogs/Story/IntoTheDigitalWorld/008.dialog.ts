import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'
import { getChoice, getProfileName } from '@/Helpers/Systems/Profile'

export const getIntoTheDigitalWorld008 = (): DialogType => {
  const profileName = getProfileName()
  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  return {
    speaker: {
      id: 'player',
      name: profileName
    },

    text: getTexts('ITDW_008', {
      '[REACTION]': getTexts(`ITDW_008_${choice?.toLocaleUpperCase()}`),
      '[NAME]': profileName
    }),

    actions: [
      {
        id: 'ITDW_008_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {}
      }
    ]
  }
}
