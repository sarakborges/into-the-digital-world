import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveProfile } from '@/Helpers/saveProfile.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame001 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeSaving = !Object.keys(profile!.npcAcquintances).includes(
    AllNpcs.savemon.id
  )

  const dialogOptions: DialogType = {
    speaker: AllNpcs.savemon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeSaving ? 'SAVEGAME_001_TEXT_ALT' : 'SAVEGAME_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-savegame-001-refuse',
        text: getDialogs('SCENES_BACK_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            npcAcquintances: isFirstTimeSaving
              ? {
                  ...profile!.npcAcquintances,
                  [AllNpcs.savemon.id]: {}
                }
              : { ...profile!.npcAcquintances }
          }

          setProfile(updatedProfile)
          setScene(null)
        }
      },

      {
        id: 'scene-savegame-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            npcAcquintances: isFirstTimeSaving
              ? {
                  ...profile!.npcAcquintances,
                  [AllNpcs.savemon.id]: {}
                }
              : { ...profile!.npcAcquintances }
          }

          saveProfile({
            profile: updatedProfile
          })

          setProfile(updatedProfile)
          setScene({
            currentScene: 'saveGame',
            currentStage: '002'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
