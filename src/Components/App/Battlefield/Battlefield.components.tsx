import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { CombatLog } from '@/Components/App/CombatLog'
import { CombatLoot } from '@/Components/App/CombatLoot'
import { CombatParties } from '@/Components/App/CombatParties'

import './Battlefield.style.scss'

export const Battlefield = () => {
  const { battle } = useBattle()
  const { scene } = useScene()

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
