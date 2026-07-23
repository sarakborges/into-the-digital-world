import { findQuest } from '@/GameData/Registries/Quest.registry'

import { isObjectiveDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const isQuestDone = (questId: string): boolean => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  return Object.keys(findQuest(questId)?.objectives ?? {}).every(
    (objective) => {
      return isObjectiveDone({
        objectiveId: objective,
        questId
      })
    }
  )
}
