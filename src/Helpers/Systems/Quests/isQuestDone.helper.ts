import { AllQuests } from '@/GameData/Quests'

import { isObjectiveDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const isQuestDone = (questId: string): boolean => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  return Object.keys(AllQuests[questId]?.objectives ?? {}).every(
    (objective) => {
      return isObjectiveDone({
        objectiveId: objective,
        questId
      })
    }
  )
}
