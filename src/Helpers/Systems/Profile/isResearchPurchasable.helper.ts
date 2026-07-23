import { getResearch } from '@/GameData/Registries/Research.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const isResearchPurchasable = (research: string): boolean => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  const researchDetails = getResearch(research)

  return Object.entries(researchDetails.cost).every(
    ([item, amount]) => (profile.items[item] ?? 0) >= amount
  )
}
