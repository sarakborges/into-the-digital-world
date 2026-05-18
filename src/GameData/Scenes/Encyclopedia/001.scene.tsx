import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const Encyclopedia001 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeSeeingEncyclopedia = !Object.keys(
    profile!.npcAcquintances
  ).includes(AllNpcs.bookmon.id)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.bookmon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeSeeingEncyclopedia
            ? 'ENCYCLOPEDIA_001_TEXT_ALT'
            : 'ENCYCLOPEDIA_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-encyclopedia-001-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (!!isFirstTimeSeeingEncyclopedia) {
            const updatedProfile = {
              ...profile!,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.bookmon.id]: {}
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
