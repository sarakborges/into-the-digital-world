import { AllScenes } from '@/GameData/Scenes'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import './Scene.style.scss'

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!scene || !digivice) {
    return
  }

  const RenderedScene = AllScenes[scene.currentScene!][scene.currentStage]

  if (!RenderedScene) {
    return
  }

  return (
    <div
      className="scene"
      data-isdigiviceopen={!!digivice.isOpen}
      data-isinbattle={!!battle}
      data-enablesmovement={!!scene.enablesMovement}
    >
      <RenderedScene />
    </div>
  )
}
