import { useScene } from '@/Hooks/Scene.hook'

import { IntroductionScenes } from './Introduction'

export const Scene = () => {
  const { scene } = useScene()

  if (!scene) {
    return
  }

  const Scenes = { introduction: IntroductionScenes }

  const RenderedScene = Scenes[scene.currentScene][scene.currentStage]

  return <RenderedScene />
}
