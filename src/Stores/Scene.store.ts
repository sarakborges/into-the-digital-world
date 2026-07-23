import { create } from 'zustand'

import type { SceneType } from '@/Types/Scene.type'

type SceneStore = {
  scene: SceneType | null
  previousScene: SceneType | null
  setScene: (scene: SceneType | null) => void
  goBackScene: () => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  scene: null,
  previousScene: null,

  setScene: (scene) => {
    set((state) => ({
      previousScene: state.scene,
      scene
    }))
  },

  goBackScene: () => {
    set((state) => ({
      scene: state.previousScene,
      previousScene: null
    }))
  }
}))
