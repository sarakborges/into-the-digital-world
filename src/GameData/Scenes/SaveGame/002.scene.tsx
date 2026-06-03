import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const SaveGame002 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getDialogs('SAVEGAME_002_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-002-continue',
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
