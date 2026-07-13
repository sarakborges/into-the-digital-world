import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const OpenNanomonIntroduction = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.research['000'])
}
