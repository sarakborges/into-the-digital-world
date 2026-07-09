import type { SceneType } from '@/Types/Scene.type'

export const isSceneStart = (scene: SceneType | null): boolean => {
  return scene?.currentStage === 'start'
}
