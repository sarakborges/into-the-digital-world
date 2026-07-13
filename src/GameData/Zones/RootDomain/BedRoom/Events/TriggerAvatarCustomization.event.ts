import { AllScenes } from '@/GameData/Scenes'

import { useSceneStore } from '@/Stores/Scene.store'

export const TriggerAvatarCustomization = () => {
  const setScene = useSceneStore.getState().setScene

  setScene(AllScenes.avatarCustomization['003'])
}
