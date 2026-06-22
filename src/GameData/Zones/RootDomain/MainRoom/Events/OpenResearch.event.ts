import {useSceneStore} from '@/Stores/Scene.store'

export const OpenResearch = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'research',
    currentStage: '001'
  })
}
