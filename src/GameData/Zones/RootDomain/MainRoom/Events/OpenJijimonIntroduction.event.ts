import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const OpenJijimonIntroduction = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.compose['000'])
}
