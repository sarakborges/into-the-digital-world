import type { ProfileType } from '@/Types/Profile.type'
import type { TileType } from '@/Types/Tile.type'
import { generateRandomNumber } from './generateRandomNumber.helper'
import type { BattleType } from '@/Types/Battle.type'
import { AllDigimons } from '@/GameData/Digimons'

export const startBattle = ({
  profile,
  tile
}: {
  profile: ProfileType
  tile: TileType
}) => {
  if (!tile) {
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

  while (enemiesSpawned.length < enemyQuantity) {
    const randomizedPossibleSpawns = possibleSpawns?.sort(
      () => Math.random() - 0.5
    )

    for (let spawn of randomizedPossibleSpawns!) {
      if (enemiesSpawned.length >= enemyQuantity) {
        break
      }

      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < spawn.spawningChance) {
        enemiesSpawned.push(spawn.id)
      }
    }
  }

  const allies = Object.keys(profile.partnerDigimons).map((digimon) => ({
    ...AllDigimons[profile.partnerDigimons[digimon].baseDigimon],
    hp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.vit,
    sp: AllDigimons[profile.partnerDigimons[digimon].baseDigimon].stats.sta
  }))

  const enemies = enemiesSpawned.map((digimon) => ({
    ...AllDigimons[digimon],
    hp: AllDigimons[digimon].stats.vit,
    sp: AllDigimons[digimon].stats.sta
  }))

  const battle: BattleType = {
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
