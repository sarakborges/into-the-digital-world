import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'
import { AllItems } from '@/GameData/Items'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction021 = () => {
  const { profile, setProfile } = useProfile()
  const { setScene } = useScene()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_021_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-021-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({
            currentScene: 'introduction',
            currentStage: '022'
          })

          setProfile({
            ...profile!,

            items: {
              [AllItems.digivice.id]: {
                ...AllItems.digivice
              }
            }
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
