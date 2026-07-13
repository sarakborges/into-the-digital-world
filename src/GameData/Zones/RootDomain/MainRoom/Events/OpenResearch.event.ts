import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const OpenResearch = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.research['001'])
}
