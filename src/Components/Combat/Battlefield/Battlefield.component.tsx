import { useEffect } from 'react'

import { skipTurn } from '@/Helpers/Systems/Battle'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatParties } from '@/Components/Combat/CombatParties'
import { TurnOrder } from '@/Components/Combat/TurnOrder'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  useEffect(() => {
    skipTurn()
  }, [battle])

  if (!battle || scene?.currentStage === 'start') {
    return
  }

  return (
    <div className="battlefield-container">
      <CombatParties />
      <TurnOrder />
    </div>
  )
}
