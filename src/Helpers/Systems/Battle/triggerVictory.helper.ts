import { useBattleStore } from '@/Stores/Battle.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const triggerVictory = () => {
  const { profile, setProfile } = useProfileStore.getState()
  const { battle } = useBattleStore.getState()

  if (!profile || !battle?.loot) {
    return
  }

  const updatedItems = { ...profile.items }

  for (const [item, amount] of Object.entries(battle.loot)) {
    updatedItems[item] = (profile.items[item] ?? 0) + amount
  }

  setProfile({ ...profile, items: updatedItems })
}
