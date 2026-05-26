import { useBattle } from '@/Hooks/Battle.hook'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLog } from '@/Components/App/CombatLog'
import { CombatLoot } from '@/Components/App/CombatLoot'
import { CombatParties } from '@/Components/App/CombatParties'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattle()
  const scene = useSceneStore((state) => state.scene)

  if (!battle) {
    return
  }

  const battleStageComponents = {
    end: <CombatLog />,
    epilogue: <CombatLoot />,
    default: <CombatParties />
  }

  return (
    <div className="battlefield">
      {battleStageComponents[scene?.currentStage!] ||
        battleStageComponents.default}
    </div>
  )
}
