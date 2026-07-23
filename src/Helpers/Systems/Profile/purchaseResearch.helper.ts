import { getResearch } from '@/GameData/Registries/Research.registry'

import { saveSession } from '@/Helpers/Systems/Data'

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

  for (const item of Object.keys(research.cost)) {
    updatedProfile.items[item] -= research.cost[item]
  }

  saveSession(updatedProfile)
}
