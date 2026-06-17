import { useEffect } from 'react'

import { skipTurn } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { CombatParties } from '@/Components/App/CombatParties'
import { TurnOrder } from '@/Components/App/TurnOrder'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  useEffect(() => {
    skipTurn()
  }, [battle])

  return (
    <div className="battlefield">
      <TurnOrder />
      <CombatParties />
    </div>
  )
}
