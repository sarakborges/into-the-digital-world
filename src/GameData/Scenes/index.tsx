import { SCENES } from '@/Consts/Scenes.const'

import { useScene } from '@/Hooks/Scene.hook'

export const Scene = () => {
  const { scene } = useScene()

  if (!scene) {
    return
  }

  const RenderedScene =
    SCENES[scene?.currentScene!][scene?.currentStage || '001']

  if (!RenderedScene) {
    return <></>
  }

  return (
    <div className="scene">
      <RenderedScene />
    </div>
  )
}
