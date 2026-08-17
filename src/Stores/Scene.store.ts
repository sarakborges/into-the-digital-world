import { create } from 'zustand'

type SceneStore = {
  currentScene: React.FC | null
  lastScene: React.FC | null

  setCurrentScene: (scene: React.FC | null) => void
  setLastScene: (scene: React.FC | null) => void
}

export const useSceneStore = create<SceneStore>((set) => ({
  currentScene: null,
  lastScene: null,

  setCurrentScene: (scene) => {
    set({ currentScene: scene })
  },

  setLastScene: (scene) => {
    set({ lastScene: scene })
  }
}))
