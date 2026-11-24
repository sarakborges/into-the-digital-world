import { AllScenes } from '@/GameData/Scenes'

import { useSceneStore } from '@/Stores/Scene.store'

import './Scene.style.scss'

export const Scene = () => {
  const { scene } = useSceneStore((state) => state)

  if (!scene) {
    return <></>
  }

  const RenderedScene = AllScenes[scene] as React.FC

  return (
    <div className="scene">
      <RenderedScene />
    </div>
  )
}
