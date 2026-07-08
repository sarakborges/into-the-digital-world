import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'


import { AllItems } from '@/GameData/Items'

import { useSceneStore } from '@/Stores/Scene.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTranslation('INTRODUCTION_011_IMAGE')}
          src={`/${AllItems.digivice?.portrait}.webp`}
        />
        <div className="text-bubble">
          <Text as="p">{getTranslation('INTRODUCTION_012_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '015'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
