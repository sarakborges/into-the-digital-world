import { AllQuests } from '@/GameData/Quests'
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

  if (AllQuests[questId].objectives[objectiveId].type === 'interact') {
    return !!profile.quests[questId].objectives[objectiveId]
  }

  if (
    ['defeatInZone', 'defeatSpecific'].includes(
      AllQuests[questId].objectives[objectiveId].type
    )
  ) {
    return (
      Number(profile.quests[questId].objectives[objectiveId] || 0) >=
      Number(AllQuests[questId].objectives[objectiveId].amount || 0)
    )
  }

  return false
}
