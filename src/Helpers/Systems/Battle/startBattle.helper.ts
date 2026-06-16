import type { PartyDigimonType } from '@/Types/PartyDigimon.type'

import { AllDigimons } from '@/GameData/Digimons'
import { AllZones } from '@/GameData/Zones'

import { generateRandomNumber, getSuccesses } from '@/Helpers/Math'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'

const spawnEnemies = () => {
  const { profile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  const { id, map, x, y } = profile.currentZone
  const tile = AllZones[id][map].grid[y][x]

  const { possibleSpawns, maxEnemies } = tile
  const enemiesSpawned: Array<PartyDigimonType> = []

  if (!possibleSpawns || !Object.keys(possibleSpawns!).length) {
    return
  }

  const enemyQuantity = Math.floor(
    generateRandomNumber({
      min: 0,
      max: (maxEnemies || 3) * 5
    }) / 5
  )

  if (enemyQuantity <= 0) {
    return
  }

  while (enemiesSpawned.length < enemyQuantity) {
    const randomizedPossibleSpawns = Object.keys(possibleSpawns!).sort(
      () => Math.random() - 0.5
    )

    for (let spawn of randomizedPossibleSpawns!) {
      if (enemiesSpawned.length >= enemyQuantity) {
        break
      }

      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < possibleSpawns[spawn].spawnChance) {
        enemiesSpawned.push({
          ...AllDigimons[possibleSpawns[spawn].digimonId],
          equipments: possibleSpawns[spawn].equipments
        })
      }
    }
  }

  return enemiesSpawned
}

export const startBattle = () => {
  const { profile } = useProfileStore.getState()
  const { setScene } = useSceneStore.getState()
  const { setBattle } = useBattleStore.getState()

  if (!profile) {
    return
  }

  const { id, map, x, y } = profile.currentZone
  const tile = AllZones[id][map].grid[y][x]

  if (!tile || !profile.party.length) {
    return
  }

  const spawnedEnemies = spawnEnemies()

  if (!spawnedEnemies) {
    return
  }

  const allies = profile.party.map((digimon, digimonIndex) => ({
    ...AllDigimons[profile.partnerDigimons[digimon].baseDigimon],

    name:
      profile.partnerDigimons[digimon].name ||
      AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name,

    equipments: profile.partnerDigimons[digimon].equipments,

    party: 'allies' as 'allies' | 'enemies',
    index: digimonIndex
  }))

  const enemies = spawnedEnemies.map((digimon, digimonIndex) => ({
    ...digimon,

    party: 'enemies' as 'allies' | 'enemies',
    index: digimonIndex,
    equipments: tile.possibleSpawns![digimon.id].equipments,
    lootTable: [...(tile.possibleSpawns![digimon.id].lootTable ?? [])]
  }))

  setScene({
    currentScene: 'battle',
    currentStage: 'start'
  })

  setBattle({
    combatLog: [],
    turnOrder: [...allies, ...enemies]
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
