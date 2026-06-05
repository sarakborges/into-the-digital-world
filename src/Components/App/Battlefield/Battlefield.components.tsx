import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLog } from '@/Components/App/CombatLog'
import { CombatParties } from '@/Components/App/CombatParties'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!battle) {
    return
  }

  return (
    <div className="battlefield">
      <CombatParties />

      {scene?.currentStage !== 'end' && <CombatLog />}
    </div>
  )
}
