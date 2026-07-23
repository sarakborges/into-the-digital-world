import type { DialogType } from '@/Types/Dialog.type'

import { NpcJijimon } from '@/GameData/Npcs/Jijimon.npc'
import { Compose002 } from '@/GameData/Scenes/Apps/Compose/002.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const Compose001 = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcJijimon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('COMPOSE_001_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-compose-001-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          setScene({ component: Compose002 })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
