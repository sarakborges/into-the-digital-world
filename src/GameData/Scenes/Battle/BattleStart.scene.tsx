import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { saveSession } from '@/Helpers/saveSession.helper'

export const BattleStart = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const isFirstTimeSeeingBattle = !Object.keys(
    profile!.npcAcquintances
  ).includes(AllNpcs.oujamon.id)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.oujamon,

    content: (
      <Text as="p">
        {getDialogs(
          !!isFirstTimeSeeingBattle
            ? 'ENCYCLOPEDIA_001_TEXT_ALT'
            : 'ENCYCLOPEDIA_001_TEXT'
        )}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          if (!!isFirstTimeSeeingBattle) {
            const updatedProfile = {
              ...profile!,
              currentlyInBattle: true,
              npcAcquintances: {
                ...profile!.npcAcquintances,
                [AllNpcs.oujamon.id]: {}
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
