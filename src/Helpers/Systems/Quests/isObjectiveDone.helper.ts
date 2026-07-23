import { getQuestObjective } from '@/GameData/Registries/Quest.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const isObjectiveDone = ({
  questId,
  objectiveId
}: {
  questId: string
  objectiveId: string
}): boolean => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  const objective = getQuestObjective({ questId, objectiveId })
  const objectiveValue = profile.quests[questId]?.objectives[objectiveId]

  if (objective.type === 'interact') {
    return !!objectiveValue
  }

  if (['defeatInZone', 'defeatSpecific'].includes(objective.type)) {
    return Number(objectiveValue ?? 0) >= Number(objective.amount ?? 0)
  }

  return false
}
