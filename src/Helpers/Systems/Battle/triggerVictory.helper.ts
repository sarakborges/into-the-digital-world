import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'

export const triggerVictory = (): void => {
  const { battle } = useBattleStore.getState()

  if (!battle?.loot) {
    return
  }

  setProfileSession((profile) => ({
    ...profile,
    items: applyItemAmounts({
      inventory: profile.items,
      items: battle.loot
    })
  }))
}
