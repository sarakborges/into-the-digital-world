import { useSceneStore } from '@/Stores/Scene.store'

export const TriggerGetStarterDigimon = () => {
  const setScene = useSceneStore((state) => state.setScene)

  setScene({
    currentScene: 'getStarterDigimon',
    currentStage: '001'
  })
}
