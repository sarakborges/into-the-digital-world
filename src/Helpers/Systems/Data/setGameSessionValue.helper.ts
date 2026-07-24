import type { BattleType } from '@/Types/Battle.type'
import type { DungeonStoreType } from '@/Types/Dungeon.type'
import type { ProfileType } from '@/Types/Profile.type'

import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

type GameSessionValueMap = {
  profile: ProfileType
  dungeon: DungeonStoreType | null
  battle: BattleType | null
}

type GameSessionValue = {
  [Key in GameSessionKey]: {
    key: Key
    value: GameSessionValueMap[Key]
  }
}[GameSessionKey]

export const setGameSessionValue = (sessionValue: GameSessionValue): void => {
  const storageKey = getStorageKey(sessionValue.key)

  try {
    sessionStorage.setItem(storageKey, JSON.stringify(sessionValue.value))

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
    console.warn(`Error saving game session value: ${storageKey}`)
    console.warn(sessionValue.value)
  }
}
