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

  if (!possibleSpawns?.length) {
    return
  }

  const enemyQuantity = Math.floor(
    generateRandomNumber({
      min: 0,
      max: (maxEnemies || 3) * 5
    }) / 5
  )

  while (enemiesSpawned.length < (enemyQuantity || 1)) {
    const randomizedPossibleSpawns = possibleSpawns?.sort(
      () => Math.random() - 0.5
    )

    for (let spawn of randomizedPossibleSpawns!) {
      if (enemiesSpawned.length >= (enemyQuantity || 1)) {
        break
      }

      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < spawn.spawningChance) {
        enemiesSpawned.push(spawn.id)
      }
    }
  }

  const allies = Object.keys(profile.partnerDigimons).map(
    (digimon, digimonIndex) => ({
      ...AllDigimons[profile.partnerDigimons[digimon].baseDigimon],
      name:
        profile.partnerDigimons[digimon].name ||
        AllDigimons[profile.partnerDigimons[digimon].baseDigimon].name,
      hp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.vit,
      sp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.sta,
      party: 'allies',
      index: digimonIndex
    })
  )

  const enemies = enemiesSpawned.map((digimon, digimonIndex) => ({
    ...AllDigimons[digimon],
    hp: AllDigimons[digimon].stats.vit,
    sp: AllDigimons[digimon].stats.sta,
    party: 'enemies',
    index: digimonIndex
  }))

  const battle = {
    allies,
    enemies,
    turnOrder: [
      ...allies.map((digimon, digimonIndex) => ({
        party: 'allies',
        index: digimonIndex,
        digimon
      })),

      ...enemies.map((digimon, digimonIndex) => ({
        party: 'enemies',
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
