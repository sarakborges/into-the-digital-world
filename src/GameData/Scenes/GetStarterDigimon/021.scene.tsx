import type { ProfileType } from '@/Types/Profile.type'
import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon021 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: (
      <Text as="p">
        {getDialogs(`GETSTARTERDIGIMON_021_TEXT`).replaceAll(
          '[NAME]',
          profile?.name
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-021-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const updatedProfile: ProfileType = {
            ...profile!,
            doneScenes: [...profile!.doneScenes, 'getStarterDigimon'],
            currentParty: [1],
            partnerDigimons: {
              1: {
                id: 1,
                baseDigimon: 'dorimon',
                isStarter: true
              }
            }
          }

          setScene(null)

          setProfile(updatedProfile)
          saveSession({
            key: 'profile',
            value: updatedProfile
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
