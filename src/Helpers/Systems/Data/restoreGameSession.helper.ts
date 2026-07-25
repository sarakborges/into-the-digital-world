import type { GameSessionKey } from '@/Consts/Storage.const'
import { getStorageKey } from '@/Consts/Storage.const'

import { BattleEnd } from '@/GameData/Scenes/Apps/Battle/BattleEnd.scene'
import { BattleTurn } from '@/GameData/Scenes/Apps/Battle/BattleTurn.scene'
import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'
import {
  BattleSessionSchema,
  DungeonSessionSchema
} from '@/Systems/Save/Session.schema'
import {
  resetGameSession,
  updateGameSession
} from '@/Systems/Session/GameSession'
import {
  readSessionStorageJson,
  removeSessionStorageValue
} from '@/Systems/Storage/BrowserStorage'

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
    let battle = battleResult.success ? battleResult.data : null

    if (battle && !dungeon) {
      console.warn('Discarding orphaned battle session without a valid dungeon.')
      discardSessionValue('battle')
      battle = null
    }

    updateGameSession({
      profile: profile.data,
      dungeon,
      battle,
      persist: false
    })

    const { setScene } = useSceneStore.getState()

    if (battle?.result) {
      setScene({ component: BattleEnd })
      return
    }

    if (battle) {
      setScene({ component: BattleTurn })
      return
    }

    if (dungeon) {
      if (dungeon.currentRoomsOptions.length) {
        setScene({ component: DungeonChooseRoom })
      }

      return
    }

    openCurrentTileScene()
  } catch (error) {
    console.warn(`Error restoring game session: ${error}`)
  }
}
