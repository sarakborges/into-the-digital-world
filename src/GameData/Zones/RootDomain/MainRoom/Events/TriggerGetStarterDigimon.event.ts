import {useSceneStore} from '@/Stores/Scene.store'

export const TriggerGetStarterDigimon = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'getStarterDigimon',
    currentStage: '001'
  })
}
