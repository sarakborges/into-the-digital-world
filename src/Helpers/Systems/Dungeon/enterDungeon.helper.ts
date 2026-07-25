import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { updateGameSession } from '@/Systems/Session/GameSession'

import { getDungeonRoomOptions } from '@/Helpers/Systems/Dungeon/getDungeonRoomOptions.helper'
import { getCurrentParty } from '@/Helpers/Systems/Profile/getCurrentParty.helper'

import { useSceneStore } from '@/Stores/Scene.store'

export const enterDungeon = (dungeon: DungeonType): void => {
  const { setScene } = useSceneStore.getState()
  const { availableFirstRooms } = dungeon

  updateGameSession({
    dungeon: {
      dungeonId: dungeon.id,
      zoneId: dungeon.zone,
      rooms: [],
      doneRooms: [],
      party: getCurrentParty(),
      currentRoomsOptions: getDungeonRoomOptions(availableFirstRooms)
    },
    battle: null
  })

  setScene({ component: DungeonChooseRoom })
}
