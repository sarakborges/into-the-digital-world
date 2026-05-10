import type { DialogType } from '@/Types/Dialog.type'

import { useScene } from '@/Hooks/Scene.hook'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { useDigivice } from '@/Hooks/Digivice.hook'

export const AvatarCustomization002 = () => {
  const { setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.dressmon,

    content: <Text as="p">{getDialogs('AVATARCUSTOMIZATION_002_TEXT')}</Text>,

    options: [
      {
        id: 'scene-avatarCustomization-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setDigivice({ ...digivice, currentApp: undefined })
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
