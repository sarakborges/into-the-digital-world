import type { DialogType } from '@/Types/Dialog.type'

import { NpcNanomon } from '@/GameData/Npcs/Nanomon.npc'
import { Research002 } from '@/GameData/Scenes/Apps/Research/002.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Research001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcNanomon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('RESEARCH_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-research-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Research002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
