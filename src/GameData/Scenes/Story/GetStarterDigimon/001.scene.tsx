import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon002 } from '@/GameData/Scenes/Story/GetStarterDigimon/002.scene'

import { getTexts } from '@/Helpers/Language'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog'
import { Text } from '@/Components/DesignSystem/Text'

export const GetStarterDigimon001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('GETSTARTERDIGIMON_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: GetStarterDigimon002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
