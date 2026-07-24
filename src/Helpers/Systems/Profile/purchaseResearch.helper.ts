import { getResearch } from '@/GameData/Registries/Research.registry'

import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

export const purchaseResearch = (researchId: string): void => {
  const research = getResearch(researchId)

  setProfileSession((profile) => ({
    ...profile,
    researches: [...profile.researches, researchId],
    items: applyItemAmounts({
      inventory: profile.items,
      items: research.cost,
      operation: 'subtract'
    })
  }))
}
