import { applyItemAmounts } from '@/Helpers/Systems/Profile/applyItemAmounts.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const triggerVictory = () => {
  const { profile, setProfile } = useProfileStore.getState()
  const { battle } = useBattleStore.getState()

  if (!profile || !battle?.loot) {
    return
  }

  setProfile({
    ...profile,
    items: applyItemAmounts({
      inventory: profile.items,
      items: battle.loot
    })
  })
}
