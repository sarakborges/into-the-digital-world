import type { DialogType } from '@/Types/Dialog.type'

import { useSceneStore } from '@/Stores/Scene.store'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllNpcs } from '@/GameData/Npcs'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { useDigiviceStore } from '@/Stores/Digivice.store'

export const AvatarCustomization002 = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const digivice = useDigiviceStore((state) => state.digivice)
  const setDigivice = useDigiviceStore((state) => state.setDigivice)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.dressmon,

    content: <Text as="p">{getDialogs('AVATARCUSTOMIZATION_002_TEXT')}</Text>,

    options: [
      {
        id: 'scene-avatarCustomization-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setDigivice({ ...digivice!, currentApp: undefined })
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
