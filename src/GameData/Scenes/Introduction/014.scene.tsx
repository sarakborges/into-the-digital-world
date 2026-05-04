import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction014 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.bootmon,

    content: <Text as="p">{getDialogs('INTRODUCTION_014_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-014-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile!,
            npcAcquintances: {
              ...profile!.npcAcquintances,
              [AllNpcs.bootmon.id]: {}
            }
          })

          setScene({
            currentScene: 'introduction',
            currentStage: '015'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
