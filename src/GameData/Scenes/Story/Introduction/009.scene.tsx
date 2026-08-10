import type { DialogType } from '@/Types/Dialog.type'

import { Introduction010 } from '@/GameData/Scenes/Story/Introduction/010.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction009 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_009_TEXT')}</Text>
      </div>
    ),

    image: {
      alt: getTexts('INTRODUCTION_009_ALT'),
      src: '/avatars/glitch.webp'
    },

    options: [
      {
        id: 'scene-introduction-009-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(Introduction010)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
