import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { settleBattle } from '@/Helpers/Systems/Battle/settleBattle.helper'
import { closeScene } from '@/Helpers/Systems/Scenes/closeScene.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLoot } from '@/Components/Combat/CombatLoot/CombatLoot.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleEnd = () => {
  const { battle } = useBattleStore((state) => state)
  const { setScene } = useSceneStore((state) => state)

  if (!battle?.result) {
    return
  }

  const dialogOptions: DialogType = {
    speaker: NpcOujamon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts(`BATTLE_END_${battle.result.toLocaleUpperCase()}`)}
          </Text>
        </div>

        {battle.result === 'victory' && <CombatLoot />}
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const settlement = settleBattle(battle)

          if (settlement === 'nextRoom') {
            setScene({ component: DungeonChooseRoom })
            return
          }

          if (settlement === 'roomComplete') {
            closeScene()
          }
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
