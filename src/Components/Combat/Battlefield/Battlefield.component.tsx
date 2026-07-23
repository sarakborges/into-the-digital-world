import { useEffect } from 'react'

import { skipTurn } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/Battlefield/Battlefield.style.scss'
import { CombatParties } from '@/Components/Combat/CombatParties'
import { TurnOrder } from '@/Components/Combat/TurnOrder'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)

  useEffect(() => {
    skipTurn()
  }, [battle])

  if (!battle) {
    return
  }

  return (
    <div className="battlefield-container">
      <CombatParties />
      <TurnOrder />
    </div>
  )
}
