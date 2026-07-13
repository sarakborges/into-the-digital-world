import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const TriggerGetStarterDigimon = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.getStarterDigimon['001'])
}
