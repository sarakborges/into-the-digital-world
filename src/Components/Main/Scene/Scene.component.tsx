import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import '@/Components/Main/Scene/Scene.style.scss'

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!scene || !digivice) {
    return
  }

  const RenderedScene = scene.component

  return (
    <div
      className="scene"
      data-isdigiviceopen={!!digivice.isOpen}
      data-enablesmovement={!!scene.enablesMovement}
    >
      <RenderedScene />
    </div>
  )
}
