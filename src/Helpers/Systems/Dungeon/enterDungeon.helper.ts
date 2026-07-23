import type { DungeonType } from '@/Types/Dungeon.type'

import { DungeonChooseRoom } from '@/GameData/Scenes/Apps/Dungeon/ChooseRoom.scene'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { saveDungeon } from '@/Helpers/Systems/Dungeon/saveDungeon.helper'
import { getCurrentParty } from '@/Helpers/Systems/Profile/getCurrentParty.helper'

import { useSceneStore } from '@/Stores/Scene.store'

export const enterDungeon = (dungeon: DungeonType) => {
  const { setScene } = useSceneStore.getState()
  const { availableFirstRooms } = dungeon

  let firstRoomOptions: Array<string> = []

  if (availableFirstRooms.length > 2) {
    for (let i = 0; i < 2; i++) {
      const randomIndex = generateRandomNumber({
        min: 0,
        max: availableFirstRooms.length - 1
      })
      firstRoomOptions.push(availableFirstRooms[randomIndex])
    }
  }

  if (availableFirstRooms.length <= 2) {
    firstRoomOptions = [...availableFirstRooms]
  }

  saveDungeon({
    dungeonId: dungeon.id,
    zoneId: dungeon.zone,
    rooms: [],
    doneRooms: [],
    party: getCurrentParty(),
    currentRoomsOptions: firstRoomOptions
  })

  setScene({ component: DungeonChooseRoom })
}
