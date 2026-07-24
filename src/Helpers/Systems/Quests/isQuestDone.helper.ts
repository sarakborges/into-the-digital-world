import { findQuest } from '@/GameData/Registries/Quest.registry'

import { isObjectiveDone } from '@/Helpers/Systems/Quests/isObjectiveDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const isQuestDone = (questId: string): boolean => {
  const profile = useProfileStore.getState().profile
  const quest = findQuest(questId)
  const questProgress = profile?.quests[questId]

  if (!profile || !quest || !questProgress) {
    return false
  }

  return Object.keys(quest.objectives).every((objectiveId) =>
    isObjectiveDone({
      questId,
      objectiveId
    })
  )
}
