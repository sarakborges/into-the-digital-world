import { saveProfile } from '@/Helpers/Systems/Profile/saveProfile.helper'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const changeScene = (scene: string | null, persist?: boolean) => {
  const { game, setGame } = useGameStore.getState()
  const { profile, patchProfile } = useProfileStore.getState()

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

    patchProfile({
      lastScene: profile.currentScene,
      currentScene: scene
    })

    if (!persist) {
      return
    }

    saveProfile()
  }, 600)
}
