import {AllResearches} from '@/GameData/Researches'

import {saveSession} from '@/Helpers/Systems/Data'

import {useProfileStore} from '@/Stores/Profile.store'

export const purchaseResearch = (researchId) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const updatedProfile = {
    ...profile,
    researches: [...(profile.researches ?? []), researchId]
  }

  for (let item of Object.keys(AllResearches[researchId].cost)) {
    updatedProfile.items[item] -= AllResearches[researchId].cost[item]
  }

  saveSession(updatedProfile)
}
