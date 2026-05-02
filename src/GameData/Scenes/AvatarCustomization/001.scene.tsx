import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const AvatarCustomization001 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.angewomon,

    content: (
      <Text as="p">
        {getDialogs('AVATAR_CUSTOMIZATION_001_TEXT').replaceAll(
          '[NAME]',
          profile?.name
        )}
      </Text>
    ),

    options: [
      {
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            npcAcquintances: [...profile!.npcAcquintances, AllNpcs.angewomon.id]
          }

          setProfile(updatedProfile)
          saveSession({ key: 'profile', value: updatedProfile })

          setScene({
            currentScene: 'avatarCustomization',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
