import { useBattleStore } from '@/Stores/Battle.store'

import { CombatParties } from '@/Components/App/CombatParties'
import { TurnOrder } from '@/Components/App/TurnOrder'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  return (
    <div className="battlefield">
      <TurnOrder />
      <CombatParties />
    </div>
  )
}
