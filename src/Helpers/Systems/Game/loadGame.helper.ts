import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const loadGame = () => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const { setGame } = useGameStore.getState()
  const { setCurrentScene } = useSceneStore.getState()

  setGame({
    isTransitioning: true
  })

  setTimeout(() => {
    setCurrentScene(profile.currentScene)

    setGame({
      isTransitioning: false,
      hasGameStarted: true
    })
  }, 600)
}
