import { useEffect } from 'react'

import { useBattleStore } from '@/Stores/Battle.store'

import { CombatParties } from '@/Components/App/CombatParties'
import { TurnOrder } from '@/Components/App/TurnOrder'

import './Battlefield.style.scss'
import { isDigimonDefeated } from '@/Helpers/isDigimonDefeated.helper'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  useEffect(() => {
    const { battle, setBattle } = useBattleStore.getState()

    const [currentDigimon, ...otherDigimons] = battle!.turnOrder

    if (isDigimonDefeated(currentDigimon)) {
      setBattle({
        ...battle!,
        turnOrder: [...otherDigimons, currentDigimon]
      })
    }
  }, [battle])

  return (
    <div className="battlefield">
      <TurnOrder />
      <CombatParties />
    </div>
  )
}
