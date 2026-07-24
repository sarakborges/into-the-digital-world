import type { BattleType } from '@/Types/Battle.type'
import type { DungeonStoreType } from '@/Types/Dungeon.type'
import type { ProfileType } from '@/Types/Profile.type'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

type GameSessionValue =
  | {
      key: 'profile'
      value: ProfileType
    }
  | {
      key: 'dungeon'
      value: DungeonStoreType | null
    }
  | {
      key: 'battle'
      value: BattleType | null
    }

export const setGameSessionValue = (sessionValue: GameSessionValue): void => {
  try {
    sessionStorage.setItem(
      `itdw_${sessionValue.key}`,
      JSON.stringify(sessionValue.value)
    )

    switch (sessionValue.key) {
      case 'profile':
        useProfileStore.getState().setProfile(sessionValue.value)
        return

      case 'dungeon':
        useDungeonStore.getState().setDungeon(sessionValue.value)
        return

      case 'battle':
        useBattleStore.getState().setBattle(sessionValue.value)
        return
    }
  } catch {
    console.warn(`Error saving game session value: itdw_${sessionValue.key}`)
    console.warn(sessionValue.value)
  }
}
