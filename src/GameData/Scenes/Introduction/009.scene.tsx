import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/Language'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction009 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getDialogs('INTRODUCTION_009_IMAGE')}
          src="/avatars/glitch.webp"
        />

        <div className="text-bubble">
          <Text as="p">{getDialogs('INTRODUCTION_009_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-009-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '010'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
