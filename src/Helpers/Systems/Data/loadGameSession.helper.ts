import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'
import {
  BattleSessionSchema,
  DungeonSessionSchema
} from '@/Systems/Save/Session.schema'
import { readSessionStorageJson } from '@/Systems/Storage/BrowserStorage'

import { clearGameSession } from '@/Helpers/Systems/Data/clearGameSession.helper'
import { setGameSessionValue } from '@/Helpers/Systems/Data/setGameSessionValue.helper'

import { getStorageKey } from '@/Consts/Storage.const'

import { useBattleStore } from '@/Stores/Battle.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const loadGameSession = (): void => {
  const { setProfile } = useProfileStore.getState()
  const { setDungeon } = useDungeonStore.getState()
  const { setBattle } = useBattleStore.getState()

  try {
    const profile = ProfileSaveSchema.safeParse(
      readSessionStorageJson(getStorageKey('profile'))
    )

    if (!profile.success) {
      clearGameSession()
      return
    }

    const dungeon = DungeonSessionSchema.nullable().safeParse(
      readSessionStorageJson(getStorageKey('dungeon'))
    )
    const battle = BattleSessionSchema.nullable().safeParse(
      readSessionStorageJson(getStorageKey('battle'))
    )

    setProfile(profile.data)

    if (dungeon.success) {
      setDungeon(dungeon.data)
    } else {
      setGameSessionValue({ key: 'dungeon', value: null })
    }

    if (battle.success) {
      setBattle(battle.data)
    } else {
      setGameSessionValue({ key: 'battle', value: null })
    }
  } catch (error) {
    console.warn(`Error loading game session: ${error}`)
  }
}
