import type { DialogType } from '@/Types/Dialog.type'

import { Introduction003 } from '@/GameData/Scenes/Story/Introduction/003.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_002_TEXT')}</Text>
      </div>
    ),

    image: {
      alt: getTexts('INTRODUCTION_002_ALT'),
      src: '/npcs/gennai.webp'
    },

    options: [
      {
        id: 'scene-introduction-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(Introduction003)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
