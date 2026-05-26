import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction004 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.general.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_004_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-004-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile!,
            npcAcquintances: {
              ...profile!.npcAcquintances,
              [AllNpcs.general.gennai.id]: {}
            }
          })

          setScene({
            currentScene: 'introduction',
            currentStage: '005'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
