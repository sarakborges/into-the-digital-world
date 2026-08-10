import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

import './Scene.style.scss'

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!scene || !digivice) {
    return
  }

  const RenderedScene = scene

  return (
    <div className="scene">
      <RenderedScene />
    </div>
  )
}
