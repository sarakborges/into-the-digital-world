import {
  GAME_SESSION_KEYS,
  getStorageKey
} from '@/Consts/Storage.const'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const clearGameSession = (): void => {
  try {
    for (const key of GAME_SESSION_KEYS) {
      sessionStorage.removeItem(getStorageKey(key))
    }
  } catch (error) {
    console.warn(`Error clearing game session: ${error}`)
  }

  useProfileStore.getState().setProfile(null)
  useDungeonStore.getState().setDungeon(null)
  useBattleStore.getState().setBattle(null)
}
