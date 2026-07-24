import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { getDungeonRoomOptions } from '@/Helpers/Systems/Dungeon/getDungeonRoomOptions.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { getCurrentParty } from '@/Helpers/Systems/Profile/getCurrentParty.helper'

import { useSceneStore } from '@/Stores/Scene.store'

export const enterDungeon = (dungeon: DungeonType) => {
  const { setScene } = useSceneStore.getState()
  const { availableFirstRooms } = dungeon

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [],
    doneRooms: [],
    party: getCurrentParty(),
    currentRoomsOptions: getDungeonRoomOptions(availableFirstRooms)
  })

  setScene({ component: DungeonChooseRoom })
}
