import { transitionGame } from '@/Helpers/Systems/Game'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const changeScene = (scene: string | null) => {
  transitionGame(() => {
    useProfileStore.getState().patchProfile({
      currentScene: scene
    })

    useSceneStore.getState().setScene(scene)
  })
}
