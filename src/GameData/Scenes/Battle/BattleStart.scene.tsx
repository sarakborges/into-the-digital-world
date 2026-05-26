import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { AllNpcs } from '@/GameData/Npcs'

import { useProfile } from '@/Hooks/Profile.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleStart = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: <Text as="p">{getDialogs('BATTLE_START_TEXT')}</Text>,

    options: [
      {
        id: 'scene-battle-001-confirm',
        text: getDialogs('SCENES_CONFIRM_BUTTON'),
        action: () => {
          const updatedProfile = {
            ...profile!,
            currentlyInBattle: true
          }

          setProfile(updatedProfile)

          setScene({
            currentScene: 'battle',
            currentStage: 'turn'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
