import type { DialogType } from '@/Types/Dialog.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { GetStarterDigimon014 } from '@/GameData/Scenes/Story/GetStarterDigimon/014.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const GetStarterDigimon013 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcGennai,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts(`GETSTARTERDIGIMON_013_TEXT`)}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-getstarterdigimon-013-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: GetStarterDigimon014 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
