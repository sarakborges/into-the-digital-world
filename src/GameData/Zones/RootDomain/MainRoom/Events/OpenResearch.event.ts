import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const OpenResearch = () => {
  const setScene = useSceneStore.getState().setScene
  const profile = useProfileStore.getState().profile

  if (
    !Object.keys(profile?.npcAcquintances!).includes(AllNpcs.digimon.nanomon.id)
  ) {
    setScene({
      currentScene: 'research',
      currentStage: '000'
    })

    return
  }

  setScene({
    currentScene: 'research',
    currentStage: '001'
  })
}
