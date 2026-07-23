import { getQuestObjective } from '@/GameData/Registries/Quest.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const isObjectiveDone = ({
  questId,
  objectiveId
}: {
  questId: string
  objectiveId: string
}) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  if (
    getQuestObjective({ questId: questId, objectiveId: objectiveId }).type ===
    'interact'
  ) {
    return !!profile.quests[questId].objectives[objectiveId]
  }

  if (
    ['defeatInZone', 'defeatSpecific'].includes(
      getQuestObjective({ questId: questId, objectiveId: objectiveId }).type
    )
  ) {
    return (
      Number(profile.quests[questId].objectives[objectiveId] || 0) >=
      Number(
        getQuestObjective({ questId: questId, objectiveId: objectiveId })
          .amount || 0
      )
    )
  }

  return false
}
