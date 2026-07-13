import { AllScenes } from '@/GameData/Scenes'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const openEquipDialog = (equipmentSlot: number) => {
  const { digivice, setDigivice } = useDigiviceStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!digivice) {
    return
  }

  setScene(AllScenes.equipment['001'])

  setDigivice({
    ...digivice,
    equipmentSlot
  })
}
