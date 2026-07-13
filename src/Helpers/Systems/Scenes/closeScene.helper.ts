import { openCurrentTileScene } from '@/Helpers/Systems/Zones'

import { useSceneStore } from '@/Stores/Scene.store'

export const closeScene = () => {
  const { setScene } = useSceneStore.getState()

  setScene(null)
  openCurrentTileScene()
}
