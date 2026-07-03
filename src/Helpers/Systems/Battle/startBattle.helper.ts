import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllDungeons } from '@/GameData/Dungeons'

import { generateRandomNumber, getSuccesses } from '@/Helpers/Math'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useDungeonStore } from '@/Stores/Dungeon.store'

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
      ...digimon
    })
  }

  while (enemiesSpawned.length < enemyQuantity) {
    const randomizedPossibleSpawns = Object.keys(digimons).sort(
      () => Math.random() - 0.5
    )

    for (let spawn of randomizedPossibleSpawns) {
      if (enemiesSpawned.length >= enemyQuantity) {
        break
      }

      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < digimons[spawn].spawnChance) {
        enemiesSpawned.push({
          ...AllDigimons[digimons[spawn].digimonId],
          equipments: digimons[spawn].equipments
        })
      }
    }
  }

  return enemiesSpawned
}

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
