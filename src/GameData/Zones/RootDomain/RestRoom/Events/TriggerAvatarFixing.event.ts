import { useSceneStore } from '@/Stores/Scene.store'

export const TriggerAvatarFixing = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'avatarCustomization',
    currentStage: '000'
  })
}
