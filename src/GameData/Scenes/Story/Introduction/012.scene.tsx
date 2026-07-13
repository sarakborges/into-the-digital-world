import type { DialogType } from '@/Types/Dialog.type'

import { AllItems } from '@/GameData/Items'
import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

export const Introduction012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTexts('INTRODUCTION_011_ALT')}
          src={`/${AllItems.digivice?.portrait}.webp`}
        />
        <div className="text-bubble">
          <Text as="p">{getTexts('INTRODUCTION_012_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(AllScenes.introduction['013'])
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
