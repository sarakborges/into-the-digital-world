import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'

import { loadSession } from '@/Helpers/Systems/Data/loadSession.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const loadGameSession = () => {
  const { setProfile } = useProfileStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setBattle } = useBattleStore.getState()

  try {
    const profile = ProfileSaveSchema.safeParse(loadSession(`profile`))

    if (!profile.success) {
      setProfile(null)
      setDungeon(null)
      setBattle(null)
      return
    }

    setProfile(profile.data)
    setDungeon(loadSession(`dungeon`))
    setBattle(loadSession(`battle`))
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
