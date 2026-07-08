import type { DialogType } from '@/Types/Dialog.type'
import { getTranslation } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'


import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import { Dialog } from '@/Components/DesignSystem/Dialog'

export const Introduction002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getTranslation('INTRODUCTION_002_IMAGE')}
          src="/npcs/gennai.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getTranslation('INTRODUCTION_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-002-continue',
        text: getTranslation('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '003'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
