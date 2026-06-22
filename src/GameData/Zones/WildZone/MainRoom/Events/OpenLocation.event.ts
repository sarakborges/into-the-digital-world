import {useSceneStore} from '@/Stores/Scene.store'

export const OpenLocation = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'location',
    currentStage: '001'
  })
}
