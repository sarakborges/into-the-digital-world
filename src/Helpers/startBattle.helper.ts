import type { ProfileType } from '@/Types/Profile.type'
import type { TileType } from '@/Types/Tile.type'

import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'

import { AllDigimons } from '@/GameData/Digimons'

export const startBattle = ({
  profile,
  tile
}: {
  profile: ProfileType
  tile: TileType
}) => {
  if (!tile || !profile.currentParty.length) {
    return
  }

  const { possibleSpawns, maxEnemies } = tile
  const enemiesSpawned: Array<string> = []

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
        enemiesSpawned.push(spawn)
      }
    }
  }

  const allies = profile.currentParty.map((digimon, digimonIndex) => ({
    ...AllDigimons[profile.partnerDigimons[digimon].baseDigimon],

    name:
      profile.partnerDigimons[digimon].name ||
      AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name,

    hp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.vit,
    sp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.sta,

    party: 'allies',
    index: digimonIndex
  }))

  const enemies = enemiesSpawned.map((digimon, digimonIndex) => ({
    ...AllDigimons[digimon],
    hp: AllDigimons[digimon].stats.vit,
    sp: AllDigimons[digimon].stats.sta,
    party: 'enemies',
    index: digimonIndex,
    lootTable: [...(tile.possibleSpawns![digimon].lootTable ?? [])]
  }))

  const battle = {
    allies,
    enemies,
    combatLog: [],
    turnOrder: [
      ...allies.map((digimon, digimonIndex) => ({
        party: 'allies' as 'allies' | 'enemies',
        index: digimonIndex,
        digimon
      })),

      ...enemies.map((digimon, digimonIndex) => ({
        party: 'enemies' as 'allies' | 'enemies',
        index: digimonIndex,
        digimon
      }))
    ].sort((a, b) =>
      a.digimon.stats.spe !== b.digimon.stats.spe
        ? a.digimon.stats.spe > b.digimon.stats.spe
          ? 1
          : -1
        : Math.random()
    )
  }

  return battle
}
