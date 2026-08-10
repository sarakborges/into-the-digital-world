import { create } from 'zustand'

type SceneStore = {
  scene: React.FC | null
  setScene: (scene: React.FC | null) => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  scene: null,

  setScene: (scene) => {
    set({ scene })
  }
}))
