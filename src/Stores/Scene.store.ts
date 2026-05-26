import type { SceneType } from '@/Types/Scene.type'

import { create } from 'zustand'

type SceneStore = {
  scene: SceneType | null
  setScene: (scene: SceneType | null) => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  scene: null,

  setScene: (scene) => {
    set({ scene })
  }
}))
