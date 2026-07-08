import { loadSession } from '@/Helpers/Systems/Data'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const loadGameSession = () => {
  const { setProfile } = useProfileStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setBattle } = useBattleStore.getState()

  try {
    const profile = loadSession({ key: `profile` })
    const dungeon = loadSession({ key: `dungeon` })
    const battle = loadSession({ key: `battle` })

    setProfile(profile)
    setDungeon(dungeon)
    setBattle(battle)
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
