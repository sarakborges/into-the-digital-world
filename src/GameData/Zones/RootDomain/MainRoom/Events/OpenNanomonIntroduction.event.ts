import {useSceneStore} from '@/Stores/Scene.store'

export const OpenNanomonIntroduction = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'research',
    currentStage: '000'
  })
}
