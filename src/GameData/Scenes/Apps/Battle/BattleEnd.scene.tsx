import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { triggerDefeat } from '@/Helpers/Systems/Battle/triggerDefeat.helper'
import { triggerVictory } from '@/Helpers/Systems/Battle/triggerVictory.helper'
import { enterNextDungeonRoom } from '@/Helpers/Systems/Dungeon/enterNextDungeonRoom.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'

import { CombatLoot } from '@/Components/Combat/CombatLoot/CombatLoot.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleEnd = () => {
  const { battle } = useBattleStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

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
          if (!dungeon || useBattleStore.getState().battle !== battle) {
            return
          }

          if (battle.result === 'victory') {
            if (!triggerVictory(battle)) {
              return
            }

            enterNextDungeonRoom()
            return
          }

          triggerDefeat()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
