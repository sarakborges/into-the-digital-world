import { AllQuests } from '@/GameData/Quests'
import { useProfileStore } from '@/Stores/Profile.store'

export const isQuestDone = (questId: string) => {
  const { profile } = useProfileStore.getState()

  return Object.keys(AllQuests[questId].objectives ?? {}).every((objective) => {
    if (AllQuests[questId].objectives[objective].type === 'interact') {
      return !!profile?.quests[questId].objectives[objective]
    }

    if (
      ['defeatInZone', 'defeatSpecific'].includes(
        AllQuests[questId].objectives[objective].type
      )
    ) {
      return (
        Number(profile?.quests[questId].objectives[objective] || 0) >=
        Number(AllQuests[questId].objectives[objective].amount || 0)
      )
    }

    return false
  })
}
