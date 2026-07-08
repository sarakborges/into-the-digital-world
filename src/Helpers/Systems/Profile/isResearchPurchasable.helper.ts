import { AllResearches } from '@/GameData/Researches'

import { useProfileStore } from '@/Stores/Profile.store'

export const isResearchPurchasable = (research: string): boolean => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  return Object.keys(AllResearches[research].cost).every(
    (item) => profile.items[item] >= AllResearches[research].cost[item]
  )
}
