import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const AvatarCustomization002 = () => {
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    content: <Text as="p">{getDialogs('AVATAR_CUSTOMIZATION_002_TEXT')}</Text>,
    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ currentScene: 'avatarCustomization', currentStage: '003' })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
