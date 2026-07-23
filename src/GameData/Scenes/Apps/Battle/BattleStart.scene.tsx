import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleStart = () => {
  const { setScene } = useSceneStore((state) => state)

  const dialogOptions: DialogType = {
    speaker: NpcOujamon,

    content: (
      <div className="text-bubble">
        <Text as="p">{getTexts('BATTLE_START_TEXT')}</Text>
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battlestart-confirm',
        text: getTexts('SCENES_CONFIRM_BUTTON'),
        action: () => {
          setScene({ component: BattleTurn })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
