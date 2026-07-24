import { getResearch } from '@/GameData/Registries/Research.registry'

import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const purchaseResearch = (researchId: string) => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const research = getResearch(researchId)

  saveSession({
    ...profile,
    researches: [...profile.researches, researchId],
    items: applyItemAmounts({
      inventory: profile.items,
      items: research.cost,
      operation: 'subtract'
    })
  })
}
