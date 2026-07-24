import { getResearch } from '@/GameData/Registries/Research.registry'

import { hasItems } from '@/Helpers/Systems/Profile/hasItems.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const isResearchPurchasable = (research: string): boolean => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return false
  }

  return hasItems({
    inventory: profile.items,
    requiredItems: getResearch(research).cost
  })
}
