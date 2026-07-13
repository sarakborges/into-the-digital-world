import { AllScenes } from '@/GameData/Scenes'

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

  setScene(AllScenes.deleteGame['001'])
}
