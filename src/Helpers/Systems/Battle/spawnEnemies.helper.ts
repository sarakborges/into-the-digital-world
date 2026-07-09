import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllDungeons } from '@/GameData/Dungeons'

import { generateRandomNumber } from '@/Helpers/Math'

import { useDungeonStore } from '@/Stores/Dungeon.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const spawnEnemies = () => {
  const { profile } = useProfileStore.getState()
  const { dungeon } = useDungeonStore.getState()

  if (!profile || !dungeon) {
    return
  }

  const currentDungeon = AllDungeons[dungeon.zoneId]?.[dungeon.dungeonId]

  const currentRoom =
    currentDungeon.possibleRooms[dungeon.rooms[dungeon.rooms.length - 1]]

  if (!currentRoom?.spawns) {
    return
  }

  const { min, max, digimons } = currentRoom.spawns
  const enemiesSpawned: Array<PartyDigimonType> = []

  const enemyQuantity =
    Math.floor(
      generateRandomNumber({
        min: min || 1,
        max: (max || 4) * 5
      }) / 5
    ) || min

  if (Object.keys(digimons).length < 2) {
    const digimon = AllDigimons[Object.keys(digimons)[0]]

    return new Array(enemyQuantity).fill({
      party: 'enemies',
      index: 0,
      ...digimon
    })
  }

  while (enemiesSpawned.length <= enemyQuantity) {
    const randomizedPossibleSpawns = Object.keys(digimons).sort(
      () => Math.random() - 0.5
    )

    for (const spawn of randomizedPossibleSpawns) {
      if (enemiesSpawned.length >= enemyQuantity) {
        break
      }

      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < digimons[spawn].spawnChance) {
        enemiesSpawned.push({
          party: 'enemies',
          index: enemiesSpawned.length,
          ...AllDigimons[digimons[spawn].digimonId],
          equipments: digimons[spawn].equipments
        })
      }
    }
  }

  return enemiesSpawned
}
