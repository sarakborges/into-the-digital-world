import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const isObjectiveDone = ({
  questId,
  objectiveId
}: {
  questId: string
  objectiveId: string
}): boolean => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  if (AllQuests[questId]?.objectives[objectiveId]?.type === 'interact') {
    return !!profile.quests[questId]?.objectives[objectiveId]
  }

  if (
    ['defeatInZone', 'defeatSpecific'].includes(
      AllQuests[questId]?.objectives[objectiveId]?.type ?? ''
    )
  ) {
    return (
      Number(profile.quests[questId]?.objectives[objectiveId] || 0) >=
      Number(AllQuests[questId]?.objectives[objectiveId]?.amount || 0)
    )
  }

  return false
}

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
