import { useSceneStore } from '@/Stores/Scene.store'

export const OpenCompose = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'compose',
    currentStage: '001'
  })
}
