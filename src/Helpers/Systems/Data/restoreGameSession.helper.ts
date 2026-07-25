import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'
import {
  BattleSessionSchema,
  DungeonSessionSchema
} from '@/Systems/Save/Session.schema'
import {
  readSessionStorageJson,
  removeSessionStorageValue
} from '@/Systems/Storage/BrowserStorage'
import {
  resetGameSession,
  updateGameSession
} from '@/Systems/Session/GameSession'

import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useSceneStore } from '@/Stores/Scene.store'

const discardSessionValue = (key: GameSessionKey): void => {
  const storageKey = getStorageKey(key)

  try {
    removeSessionStorageValue(storageKey)
  } catch (error) {
    console.warn(`Error discarding game session value ${storageKey}: ${error}`)
  }
}

export const restoreGameSession = (): void => {
  resetGameSession({ persist: false })

  try {
    const profile = ProfileSaveSchema.safeParse(
      readSessionStorageJson(getStorageKey('profile'))
    )

    if (!profile.success) {
      resetGameSession()
      return
    }

    const dungeonResult = DungeonSessionSchema.nullable().safeParse(
      readSessionStorageJson(getStorageKey('dungeon'))
    )
    const battleResult = BattleSessionSchema.nullable().safeParse(
      readSessionStorageJson(getStorageKey('battle'))
    )

    if (!dungeonResult.success) {
      discardSessionValue('dungeon')
    }

    if (!battleResult.success) {
      discardSessionValue('battle')
    }

    const dungeon = dungeonResult.success ? dungeonResult.data : null
    const battle = battleResult.success ? battleResult.data : null

    updateGameSession({
      profile: profile.data,
      dungeon,
      battle,
      persist: false
    })

    const { setScene } = useSceneStore.getState()

    if (battle) {
      setScene({ component: BattleTurn })
      return
    }

    if (dungeon) {
      setScene({ component: DungeonChooseRoom })
      return
    }

    openCurrentTileScene()
  } catch (error) {
    console.warn(`Error restoring game session: ${error}`)
  }
}
