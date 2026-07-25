import type { BattleType } from '@/Types/Battle.type'
import type { DungeonStoreType } from '@/Types/Dungeon.type'
import type { ProfileType } from '@/Types/Profile.type'

import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

import {
  removeSessionStorageValue,
  writeSessionStorageJson
} from '@/Systems/Storage/BrowserStorage'
import { cancelWarpTransition } from '@/Systems/Session/WarpTransition'

import { useAvatarCustomizationStore } from '@/Stores/AvatarCustomization.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useCompositionStore } from '@/Stores/Composition.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

type GameSessionState = {
  profile: ProfileType | null
  dungeon: DungeonStoreType | null
  battle: BattleType | null
}

type GameSessionUpdate = Partial<GameSessionState> & {
  persist?: boolean
}

const persistSessionValue = ({
  key,
  value
}: {
  key: GameSessionKey
  value: unknown | null
}): void => {
  const storageKey = getStorageKey(key)

  try {
    if (value === null) {
      removeSessionStorageValue(storageKey)
      return
    }

    writeSessionStorageJson({ key: storageKey, value })
  } catch (error) {
    console.warn(`Error persisting game session value ${storageKey}: ${error}`)
  }
}

export const updateGameSession = ({
  persist = true,
  ...update
}: GameSessionUpdate): void => {
  const shouldUpdateProfile = Object.prototype.hasOwnProperty.call(
    update,
    'profile'
  )
  const shouldUpdateDungeon = Object.prototype.hasOwnProperty.call(
    update,
    'dungeon'
  )
  const shouldUpdateBattle = Object.prototype.hasOwnProperty.call(
    update,
    'battle'
  )

  const profile = update.profile ?? null
  const dungeon = update.dungeon ?? null
  const battle = update.battle ?? null

  if (shouldUpdateProfile) {
    useProfileStore.getState().setProfile(profile)
  }

  if (shouldUpdateDungeon) {
    useDungeonStore.getState().setDungeon(dungeon)
  }

  if (shouldUpdateBattle) {
    useBattleStore.getState().setBattle(battle)
  }

  if (!persist) {
    return
  }

  if (shouldUpdateProfile) {
    persistSessionValue({ key: 'profile', value: profile })
  }

  if (shouldUpdateDungeon) {
    persistSessionValue({ key: 'dungeon', value: dungeon })
  }

  if (shouldUpdateBattle) {
    persistSessionValue({ key: 'battle', value: battle })
  }
}

export const resetGameSession = ({
  persist = true
}: {
  persist?: boolean
} = {}): void => {
  cancelWarpTransition()

  updateGameSession({
    profile: null,
    dungeon: null,
    battle: null,
    persist
  })

  useSceneStore.getState().resetScene()
  useDigiviceStore.getState().resetDigivice()
  useCompositionStore.getState().resetComposition()
  useAvatarCustomizationStore.getState().resetAvatarCustomization()
  useGameStore.getState().resetGame()
}
