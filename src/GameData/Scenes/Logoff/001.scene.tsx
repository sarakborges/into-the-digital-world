import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'
import { deleteSession } from '@/Helpers/deleteSession.helper'
import { saveProfile } from '@/Helpers/saveProfile.helper'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Logoff001 = () => {
  const { profile, setProfile } = useProfile()
  const { savedProfiles } = useSavedProfiles()
  const { setScene } = useScene()

  const isFirstTimeLoggingOff = !Object.keys(profile!.npcAcquintances).includes(
    AllNpcs.logamon.id
  )

  const dialogOptions: DialogType = {
    speaker: AllNpcs.logamon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeLoggingOff ? 'LOGOFF_001_TEXT_ALT' : 'LOGOFF_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-logoff-001-refuse',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          if (!!isFirstTimeLoggingOff) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.logamon.id]: {}
              }
            }

            saveProfile({
              profile: updatedProfile,
              savedProfiles: savedProfiles || []
            })

            saveSession({ key: 'profile', value: updatedProfile })
          }

          setScene(null)
        }
      },

      {
        id: 'scene-logoff-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!!isFirstTimeLoggingOff) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.logamon.id]: {}
              }
            }

            saveProfile({
              profile: updatedProfile,
              savedProfiles: savedProfiles || []
            })
          }

          setProfile(null)
          setScene(null)

          deleteSession({ key: 'profile' })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
