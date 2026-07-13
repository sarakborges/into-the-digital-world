import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const OpenLocation = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.location['001'])
}
