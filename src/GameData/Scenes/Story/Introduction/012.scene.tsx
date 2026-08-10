import type { DialogType } from '@/Types/Dialog.type'

import { AllItems } from '@/GameData/Items'
import { Introduction013 } from '@/GameData/Scenes/Story/Introduction/013.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('INTRODUCTION_012_TEXT')}</Text>
      </div>
    ),

    image: {
      alt: getTexts('INTRODUCTION_011_ALT'),
      src: `/${AllItems.digivice?.portrait}.webp`
    },

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(Introduction013)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
