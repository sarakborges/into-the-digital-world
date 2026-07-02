import { useEffect } from 'react'

import { skipTurn } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import { CombatParties } from '@/Components/Combat/CombatParties'
import { TurnOrder } from '@/Components/Combat/TurnOrder'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)

  useEffect(() => {
    skipTurn()
  }, [battle])

  if (!battle) {
    return
  }

  return (
    <div className="battlefield">
      <CombatParties />
      <TurnOrder />
    </div>
  )
}
