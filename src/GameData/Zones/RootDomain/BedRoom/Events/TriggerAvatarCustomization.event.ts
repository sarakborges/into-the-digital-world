import {useSceneStore} from '@/Stores/Scene.store'

export const TriggerAvatarCustomization = () => {
  const setScene = useSceneStore.getState().setScene

  setScene({
    currentScene: 'avatarCustomization',
    currentStage: '003'
  })
}
