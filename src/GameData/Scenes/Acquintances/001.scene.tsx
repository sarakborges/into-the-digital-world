import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Acquintances001 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeSeeingAcquintances = !Object.keys(
    profile!.npcAcquintances
  ).includes(AllNpcs.addmon.id)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.addmon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeSeeingAcquintances
            ? 'ACQUINTANCES_001_TEXT_ALT'
            : 'ACQUINTANCES_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-acquintances-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (!!isFirstTimeSeeingAcquintances) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.addmon.id]: {}
              }
            }

            setProfile(updatedProfile)
            saveSession({ key: 'profile', value: updatedProfile })
          }

          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
