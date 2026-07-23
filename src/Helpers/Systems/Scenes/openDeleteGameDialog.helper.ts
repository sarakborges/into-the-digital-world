import { DeleteGame001 } from '@/GameData/Scenes/Apps/DeleteGame/001.scene'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openDeleteGameDialog = (profileId: number) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!digivice) {
    return
  }

  setDigivice({
    ...digivice,
    currentDetails: profileId
  })

  setScene({ component: DeleteGame001 })
}
