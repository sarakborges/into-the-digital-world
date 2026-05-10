import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction024 = () => {
  const { setScene } = useScene()
  const { profile, setProfile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.dressmon,

    content: <Text as="p">{getDialogs('INTRODUCTION_024_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-024-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setProfile({
            ...profile!,
            npcAcquintances: {
              ...profile!.npcAcquintances,
              [AllNpcs.dressmon.id]: {}
            }
          })

          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
