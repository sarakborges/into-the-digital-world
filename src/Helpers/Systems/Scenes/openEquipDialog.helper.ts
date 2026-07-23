import { Equipment001 } from '@/GameData/Scenes/Apps/Equipment/001.scene'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openEquipDialog = (equipmentSlot: number) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!digivice) {
    return
  }

  setScene({ component: Equipment001 })

  setDigivice({
    ...digivice,
    equipmentSlot
  })
}
