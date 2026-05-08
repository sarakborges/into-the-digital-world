import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame002 = () => {
  const { setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  const dialogOptions: DialogType = {
    speaker: AllNpcs.savemon,

    content: <Text as="p">{getDialogs('SAVEGAME_002_TEXT')}</Text>,

    options: [
      {
        id: 'scene-savegame-002-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setDigivice({ ...digivice, isOpen: false })
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
