import { getResearch } from '@/GameData/Registries/Research.registry'

import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const purchaseResearch = (researchId: string) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const research = getResearch(researchId)
  const updatedProfile = {
    ...profile,
    researches: [...(profile.researches ?? []), researchId]
  }

  for (const [item, amount] of Object.entries(research.cost)) {
    updatedProfile.items[item] = (updatedProfile.items[item] ?? 0) - amount
  }

  saveSession(updatedProfile)
}
