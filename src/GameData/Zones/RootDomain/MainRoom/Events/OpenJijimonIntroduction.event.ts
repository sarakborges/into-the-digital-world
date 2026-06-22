import {useSceneStore} from '@/Stores/Scene.store'

export const OpenJijimonIntroduction = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'compose',
    currentStage: '000'
  })
}
