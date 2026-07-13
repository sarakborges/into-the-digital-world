import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getTexts } from '@/Helpers/Language'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const SaveGame002 = () => {
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!digivice) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.savemon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('SAVEGAME_002_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-savegame-002-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setDigivice({ ...digivice, currentApp: undefined })
          setScene(null)
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
