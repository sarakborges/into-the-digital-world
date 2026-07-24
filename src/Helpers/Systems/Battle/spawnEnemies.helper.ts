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

  const currentRoomId = dungeon.rooms.at(-1)
  const encounters = currentRoomId
    ? currentDungeon.possibleRooms[currentRoomId]?.encounters
    : undefined

  if (!encounters?.length) {
    return
  }

  const randomEncounter = generateRandomNumber({
    min: 0,
    max: encounters.length - 1
  })
  const encounter = encounters[randomEncounter]

  return encounter?.digimons
}
