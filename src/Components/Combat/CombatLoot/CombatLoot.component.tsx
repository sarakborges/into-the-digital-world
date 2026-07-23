import { hasBattleLoot } from '@/Helpers/Systems/Battle/hasBattleLoot.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/CombatLoot/CombatLoot.style.scss'
import { ItemsList } from '@/Components/Global/ItemsList'

export const CombatLoot = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle || !hasBattleLoot(battle)) {
    return
  }

  return (
    <div className="combat-loot">
      <ItemsList list={battle.loot} />
    </div>
  )
}
