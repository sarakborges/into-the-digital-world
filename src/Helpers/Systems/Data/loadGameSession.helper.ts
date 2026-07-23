import { migrateProfile } from '@/Systems/Save/Save.migrations'

import { loadSession } from '@/Helpers/Systems/Data/loadSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const loadGameSession = () => {
  const { setProfile } = useProfileStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setBattle } = useBattleStore.getState()

  try {
    const rawProfile = loadSession(`profile`)
    const dungeon = loadSession(`dungeon`)
    const battle = loadSession(`battle`)
    const profile = rawProfile ? migrateProfile(rawProfile) : null

    setProfile(profile)
    setDungeon(dungeon)
    setBattle(battle)
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
