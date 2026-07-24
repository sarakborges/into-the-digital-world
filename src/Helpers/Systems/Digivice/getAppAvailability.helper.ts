import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const getAppAvailability = (appId: string): boolean => {
  const profile = useProfileStore.getState().profile
  const scene = useSceneStore.getState().scene

  if (!profile) {
    return false
  }

  const starterQuestIsDone = isQuestDone(StarterDigimonQuest.id)
  const isSave = appId === 'save'
  const isLogoff = appId === 'logoff'

  return !(
    (!!scene && !scene.enablesMovement) ||
    (!starterQuestIsDone && !(isSave || isLogoff))
  )
}
