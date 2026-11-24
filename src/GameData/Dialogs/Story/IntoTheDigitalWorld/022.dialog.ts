import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld023 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/023.dialog'
import { DigiviceItem } from '@/GameData/Items/Digivice.item'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { getChoice } from '@/Helpers/Systems/Profile/getChoice.helper'

export const getIntoTheDigitalWorld022 = (): DialogType => {
  const choice = getChoice('INTO_THE_DIGITAL_WORLD_NAME_REACTION')

  if (!choice) {
    throw new Error('Missing INTO_THE_DIGITAL_WORLD_NAME_REACTION choice')
  }

  return {
    text: getTexts(`ITDW_022_${choice.toUpperCase()}`),

    image: {
      src: DigiviceItem.picture,
      alt: DigiviceItem.name
    },

    actions: [
      {
        id: 'ITDW_022_CONTINUE',

        text: getTexts('SCENES_CONTINUE_BUTTON'),

        onClick: () => {
          changeDialog(IntoTheDigitalWorld023)
        }
      }
    ]
  }
}
