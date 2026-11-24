import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const changeScene = (scene: string | null) => {
  const { game, setGame } = useGameStore.getState()
  const { patchProfile } = useProfileStore.getState()
  const { setScene } = useSceneStore.getState()

  setGame({
    ...game,
    isTransitioning: true
  })

  setTimeout(() => {
    setGame({
      ...game,
      isTransitioning: false
    })

    patchProfile({
      currentScene: scene
    })

    setScene(scene)
  }, 600)
}
