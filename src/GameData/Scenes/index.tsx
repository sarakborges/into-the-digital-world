import { useScene } from '@/Hooks/Scene.hook'

import { IntroductionScenes } from './Introduction'
import { AvatarCustomizationScenes } from './AvatarCustomization'

export const Scene = () => {
  const { scene } = useScene()

  if (!scene) {
    return
  }

  const Scenes = {
    introduction: IntroductionScenes,
    customization: AvatarCustomizationScenes
  }

  const RenderedScene = Scenes[scene.currentScene][scene.currentStage]

  return <RenderedScene />
}
