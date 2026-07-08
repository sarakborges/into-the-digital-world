import { AllDungeons } from '@/GameData/Dungeons'

import { generateRandomNumber, getSuccesses } from '@/Helpers/Math'
import { saveBattle, spawnEnemies } from '@/Helpers/Systems/Battle'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const startBattle = () => {
  const { profile } = useProfileStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!profile || !dungeon) {
    return
  }

  const currentDungeon = AllDungeons[dungeon.zoneId]?.[dungeon.dungeonId]

  const currentRoom =
    currentDungeon.possibleRooms[dungeon.rooms[dungeon.rooms.length - 1]]

  if (!currentRoom || !profile.party.length) {
    return
  }

  const spawnedEnemies = spawnEnemies()

  if (!spawnedEnemies) {
    return
  }

  const enemies = spawnedEnemies.map((digimon, digimonIndex) => ({
    ...digimon,

    party: 'enemies' as 'allies' | 'enemies',
    index: digimonIndex,
    equipments: currentRoom.spawns?.digimons![digimon.id].equipments,
    lootTable: [...(currentRoom.spawns?.digimons![digimon.id].lootTable ?? [])]
  }))

  saveBattle({
    combatLog: [],
    turnOrder: [...dungeon.party, ...enemies]
      .map((digimon) => ({
        ...digimon,
        initiative: getSuccesses(digimon.stats.agi)
      }))
      .sort((a, b) =>
        a.initiative !== b.initiative
          ? a.initiative > b.initiative
            ? 1
            : -1
          : generateRandomNumber({ min: -1, max: 1 })
      )
  })
}
