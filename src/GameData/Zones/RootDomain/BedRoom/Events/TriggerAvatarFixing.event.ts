import { useSceneStore } from '@/Stores/Scene.store'
import { AllScenes } from '@/GameData/Scenes'

export const TriggerAvatarFixing = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.avatarCustomization['000'])
}
