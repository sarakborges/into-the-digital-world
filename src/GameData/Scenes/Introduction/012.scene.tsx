import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction012 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: (
      <>
        <Text as="p">{getDialogs('INTRODUCTION_012_TEXT')}</Text>,
        <Portrait
          alt={getDialogs('INTRODUCTION_011_IMAGE')}
          src="/items/digivice.webp"
        />
      </>
    ),

    options: [
      {
        id: 'scene-introduction-012-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '013'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
