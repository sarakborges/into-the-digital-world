import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction029 = () => {
  const { setScene } = useScene()
  const { profile } = useProfile()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.gennai,

    content: <Text as="p">{getDialogs('INTRODUCTION_029_TEXT')}</Text>,

    options: [
      {
        id: 'scene-introduction-029-confirm',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene(null)
          saveSession({
            key: 'profile',
            value: { ...profile!, currentScene: null }
          })
        }
      }
    ].filter((option) => !!option)
  }

  return <Dialog {...dialogOptions} />
}
