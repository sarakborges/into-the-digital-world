import type { ProfileType } from '@/Types/Profile.type'
import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { Text } from '@/Components/System/Text'

import { useSceneStore } from '@/Stores/Scene.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Dialog } from '@/Components/App/Dialog'

export const GetStarterDigimon021 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

  const initialBondValue = {
    accept: 5,
    neutral: 0,
    refuse: -5
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

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
                isStarter: true,
                bond: initialBondValue[
                  profile?.meaningfulChoices.dorimonMeeting!
                ]
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
