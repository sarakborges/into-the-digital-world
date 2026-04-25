import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialog } from '@/Texts'

import { Dialog } from '@/Components/App/Dialog'
import { Text } from '@/Components/System/Text'

export const Introduction007 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: 'Culumon',
    speakerAvatar: 'npcs/ROOT_DOMAIN-CULUMON',

    content: <Text as="p">{getDialog('INTRODUCTION_007_TEXT')}</Text>,

    options: [
      {
        text: getDialog('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '008'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
