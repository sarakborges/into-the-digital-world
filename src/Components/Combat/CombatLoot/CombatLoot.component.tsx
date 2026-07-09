import { hasBattleLoot } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { ItemsList } from '@/Components/Global/ItemsList'

import './CombatLoot.style.scss'

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
