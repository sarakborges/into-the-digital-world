import type { SceneType } from '@/Types/Scene.type'

export type SceneContextType = {
  scene: SceneType | null
  setScene: React.Dispatch<React.SetStateAction<SceneType | null>>
}
