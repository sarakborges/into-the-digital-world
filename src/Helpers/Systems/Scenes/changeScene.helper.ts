import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const changeScene = (scene: React.FC | null) => {
  const { game, setGame } = useGameStore.getState()
  const { profile, setProfile } = useProfileStore.getState()
  const { setCurrentScene, setLastScene, currentScene } =
    useSceneStore.getState()

  if (!game) {
    return
  }

  setGame({
    ...game,
    isTransitioning: true
  })

  setTimeout(() => {
    setGame({
      ...game,
      isTransitioning: false
    })

    setLastScene(currentScene)
    setCurrentScene(scene)

    if (!profile) {
      return
    }

    setProfile({
      ...profile,
      currentScene: scene
    })
  }, 600)
}
