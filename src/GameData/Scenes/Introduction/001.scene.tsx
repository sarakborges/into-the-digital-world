import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction001 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: (
      <>
        <Portrait
          alt={getDialogs('INTRODUCTION_001_IMG')}
          src="/zones/root_domain.png"
        />

        <Text as="p">{getDialogs('INTRODUCTION_001_TEXT')}</Text>
      </>
    ),

    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
