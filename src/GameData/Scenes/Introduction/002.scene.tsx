import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'
import { Portrait } from '@/DesignSystem/Portrait'

import { Dialog } from '@/Components/Dialog'

export const Introduction002 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getDialogs('INTRODUCTION_002_IMAGE')}
          src="/npcs/gennai.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getDialogs('INTRODUCTION_002_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
