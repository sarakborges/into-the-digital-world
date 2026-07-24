import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

const GAME_SESSION_KEYS = ['profile', 'dungeon', 'battle'] as const

export const clearGameSession = (): void => {
  try {
    for (const key of GAME_SESSION_KEYS) {
      sessionStorage.removeItem(`itdw_${key}`)
    }
  } catch (error) {
    console.warn(`Error clearing game session: ${error}`)
  }

  useProfileStore.getState().setProfile(null)
  useDungeonStore.getState().setDungeon(null)
  useBattleStore.getState().setBattle(null)
}
