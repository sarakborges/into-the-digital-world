import type { VictoryBattleType } from '@/Types/Battle.type'

import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'

export const triggerVictory = (battle: VictoryBattleType): boolean => {
  if (useBattleStore.getState().battle !== battle) {
    return false
  }

  return setProfileSession((profile) => ({
    ...profile,
    items: applyItemAmounts({
      inventory: profile.items,
      items: battle.loot
    })
  }))
}
