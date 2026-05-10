import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Profile001 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeSeeingProfile = !Object.keys(
    profile!.npcAcquintances
  ).includes(AllNpcs.mirrormon.id)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.mirrormon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeSeeingProfile
            ? 'PROFILE_001_TEXT_ALT'
            : 'PROFILE_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-profile-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (!!isFirstTimeSeeingProfile) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.mirrormon.id]: {}
              }
            }

            setProfile(updatedProfile)
            saveSession({ key: 'profile', value: updatedProfile })
          }

          setScene({
            currentScene: 'profile',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
