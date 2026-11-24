import type { DialogType } from '@/Types/Dialog.type'

import { IntoTheDigitalWorld017 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/017.dialog'
import { DigiviceItem } from '@/GameData/Items/Digivice.item'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
export const getIntoTheDigitalWorld016 = (): DialogType => {
  return {
    text: getTexts('ITDW_016'),

    image: {
      src: DigiviceItem.picture,
      alt: DigiviceItem.name
    },

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
