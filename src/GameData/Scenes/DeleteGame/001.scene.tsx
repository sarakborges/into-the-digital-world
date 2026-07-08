import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { deleteGame } from '@/Helpers/Systems/Data'

import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const DeleteGame001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTranslation('DELETEGAME_001')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-deletegame-001-cancel',
        text: getTranslation('SCENES_CANCEL_BUTTON'),
        action: () => {
          setScene(null)
        }
      },

      {
        id: 'scene-deletegame-001-confirm',
        text: getTranslation('SCENES_CONFIRM_BUTTON'),
        action: () => {
          deleteGame()
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
