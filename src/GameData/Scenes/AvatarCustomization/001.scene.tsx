import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const AvatarCustomization001 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.angewomon.name,
    speakerAvatar: AllNpcs.angewomon.portrait,

    content: (
      <>
        <Text as="p">
          {getDialogs('AVATAR_CUSTOMIZATION_001_TEXT').replaceAll(
            '[NAME]',
            profile?.name
          )}
        </Text>
      </>
    ),

    options: [
      {
        text: getDialogs('SCENES_LEAVE_BUTTON'),
        action: () => {
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
