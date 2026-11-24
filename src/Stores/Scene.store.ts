import { create } from 'zustand'

type SceneStore = {
  scene: string | null
  setScene: (scene: string | null) => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  scene: null,
  setScene: (scene) => {
    set({ scene })
  }
}))
