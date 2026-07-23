import { getDungeon } from '@/GameData/Registries/Dungeon.registry'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const spawnEnemies = () => {
  const { profile } = useProfileStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!profile || !dungeon) {
    return
  }

  const currentDungeon = getDungeon({
    zoneId: dungeon.zoneId,
    dungeonId: dungeon.dungeonId
  })

  const currentRoom =
    currentDungeon.possibleRooms[dungeon.rooms[dungeon.rooms.length - 1]]

  if (!currentRoom?.encounters) {
    return
  }

  const randomEncounter = generateRandomNumber({
    min: 0,
    max: currentRoom.encounters.length - 1
  })

  return currentRoom.encounters[randomEncounter].digimons
}
