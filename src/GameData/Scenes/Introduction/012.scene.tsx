import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllItems } from '@/GameData/Items'

import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction012 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getDialogs('INTRODUCTION_011_IMAGE')}
          src={`/${AllItems.digivice?.portrait}.webp`}
        />
        <div className="text-bubble">
          <Text as="p">{getDialogs('INTRODUCTION_012_TEXT')}</Text>
        </div>
      </>
    ),

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
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
