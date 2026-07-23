import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { deleteGame } from '@/Helpers/Systems/Data/deleteGame.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const DeleteGame001 = () => {
  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('DELETEGAME_001')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-deletegame-001-cancel',
        text: getTexts('SCENES_CANCEL_BUTTON'),
        action: () => {
          closeScene()
        }
      },

      {
        id: 'scene-deletegame-001-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          void deleteGame()
          closeScene()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
