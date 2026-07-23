import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { isDigimonDefeated } from '@/Helpers/Systems/Battle/isDigimonDefeated.helper'
import { triggerDefeat } from '@/Helpers/Systems/Battle/triggerDefeat.helper'
import { triggerVictory } from '@/Helpers/Systems/Battle/triggerVictory.helper'
import { enterNextDungeonRoom } from '@/Helpers/Systems/Dungeon/enterNextDungeonRoom.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { CombatLoot } from '@/Components/Combat/CombatLoot/CombatLoot.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const BattleEnd = () => {
  const { profile } = useProfileStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { dungeon } = useDungeonStore((state) => state)

  if (!battle || !profile) {
    return
  }

  const battleResult = battle.turnOrder
    .filter((digimon) => !isDigimonDefeated(digimon))
    .every((digimon) => digimon.party === 'allies')
    ? 'victory'
    : 'defeat'

  const dialogOptions: DialogType = {
    speaker: NpcOujamon,

    content: (
      <div className="dialog-with-reactions">
        <div className="text-bubble">
          <Text as="p">
            {getTexts(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
          </Text>
        </div>

        {battleResult === 'victory' && <CombatLoot />}
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: () => {
          if (!dungeon) {
            return
          }

          if (battleResult === 'victory') {
            triggerVictory()
          }

          if (battleResult === 'defeat') {
            triggerDefeat()
          }

          enterNextDungeonRoom()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
