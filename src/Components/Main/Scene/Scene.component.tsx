import { useSceneStore } from '@/Stores/Scene.store'

import './Scene.style.scss'

export const Scene = () => {
  const { currentScene } = useSceneStore((state) => state)
  const RenderedScene = currentScene as React.FC

  if (!currentScene) {
    return
  }

  return (
    <div className="scene">
      <RenderedScene />
    </div>
  )
}
