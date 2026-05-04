import { useScene } from '@/Hooks/Scene.hook'

import { IntroductionScenes } from './Introduction'
import { AvatarCustomizationScenes } from './AvatarCustomization'
import { useProfile } from '@/Hooks/Profile.hook'

export const Scene = () => {
  const { scene } = useScene()
  const { profile } = useProfile()

  if (!scene && !profile?.currentScene) {
    return
  }

  const Scenes = {
    introduction: IntroductionScenes,
    avatarCustomization: AvatarCustomizationScenes
  }

  const RenderedScene =
    Scenes[scene?.currentScene || profile?.currentScene!][
      scene?.currentStage || '001'
    ]

  return <RenderedScene />
}
