import { useBattleStore } from '@/Stores/Battle.store'

import { ItemsList } from '@/Components/App/ItemsList'

import './CombatLoot.style.scss'

export const CombatLoot = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle || !Object.keys(battle.loot ?? {}).length) {
    return
  }

  return (
    <div className="combat-loot">
      <ItemsList list={battle.loot} />
    </div>
  )
}
