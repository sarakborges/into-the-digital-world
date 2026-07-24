import { DeleteGame001 } from '@/GameData/Scenes/Apps/DeleteGame/001.scene'

import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openDeleteGameDialog = (profileId: number) => {
  const { digivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!digivice) {
    return
  }

  updateDigivice({ currentDetails: profileId })
  setScene({ component: DeleteGame001 })
}
