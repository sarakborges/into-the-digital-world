import type { MapType } from '@/Types/Map.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { DigimonType, WildDigimonType } from '@/Types/Digimon.type'

import { DIGIMON_STATS } from '@/Consts/DigimonStats.const'
import { DIGIMON_POINTS_PER_LEVEL } from '@/Consts/Levels.const'

import { ALL_DIGIMONS } from '@/GameData/Digimons'

import { randomNumber } from '@/Helpers'

export const startBattleHelper = ({
  currentMap,
  profile,
  isBoss
}: {
  currentMap: MapType
  profile: ProfileType
  isBoss?: boolean
}) => {
  const getDigimonStats = (digimon) => {
    const extraStatsKeys = digimon.extraStats
      ? Object.keys(digimon.extraStats)
      : []
    const baseDigimon = digimon.baseDigimon as DigimonType

    const stats = { ...baseDigimon.stats }

    extraStatsKeys.forEach((statItem) => {
      const extraStat = digimon.extraStats?.[statItem]

      if (extraStat) {
        if (extraStat.type === 'fixed') {
          stats[statItem] += digimon.extraStats[statItem].value
        }
      }
    })

    return stats
  }

  const setDigimonHpSp = (digimon) => {
    return {
      ...digimon,
      currentHp: digimon.stats.hp,
      currentSp: digimon.stats.sp
    }
  }

  const playerParty = profile.party?.map((partyItem) => {
    const partnerDigimon = profile.partners?.find(
      (partnerItem) => partnerItem.id === partyItem
    )!

    const baseDigimon = ALL_DIGIMONS[
      partnerDigimon.baseDigimon as string
    ] as DigimonType

    const playerDigimon = {
      id: partnerDigimon.id,
      baseDigimon: { ...baseDigimon },
      name: partnerDigimon.name || '',
      level: partnerDigimon.level,
      stats: getDigimonStats({ ...partnerDigimon, baseDigimon }),
      party: 'player'
    }

    return { ...playerDigimon, ...setDigimonHpSp(playerDigimon) }
  })

  const getEnemyParty = () => {
    if (isBoss) {
      return [...currentMap?.wildDigimons!]
    }

    const quantityOfEnemies = randomNumber({
      min: 1,
      max: Number(currentMap.maxEnemiesPerEncounter || 3)
    })
    const enemiesArray: WildDigimonType[] = []

    for (let i = 0; i < quantityOfEnemies; i++) {
      const randomEnemy = Math.floor(
        Math.random() * currentMap.wildDigimons!.length
      )

      enemiesArray.push(currentMap.wildDigimons![randomEnemy])
    }

    return enemiesArray
  }

  const enemyParty = getEnemyParty().map((digimonItem, digimonKey) => {
    const statsKeys = Object.keys(DIGIMON_STATS)
    const baseDigimon = digimonItem.baseDigimon as DigimonType

    const enemyLevel = isBoss
      ? currentMap.bossLevel!
      : Math.floor(
          Math.random() *
            (currentMap.enemyLevelRange!.max -
              currentMap.enemyLevelRange!.min +
              1)
        ) + currentMap.enemyLevelRange!.min

    const enemyDigimon = {
      id: `${digimonItem.id}_${digimonKey}`,
      baseDigimon: { ...baseDigimon },
      level: enemyLevel,
      stats: getDigimonStats(digimonItem),
      party: 'enemy',
      lootTable: digimonItem.lootTable
    }

    // Gives enemies {STATS_BY_LEVEL} random stats per level above 1
    for (let i = 0; i < (enemyLevel - 1) * DIGIMON_POINTS_PER_LEVEL; i++) {
      const statKey = Math.floor(Math.random() * statsKeys.length)
      enemyDigimon.stats[statsKeys[statKey]]++
    }

    return { ...enemyDigimon, ...setDigimonHpSp(enemyDigimon) }
  })

  const allDigimons = [...playerParty!, ...enemyParty].map((item) => {
    return { ...item }
  })

  const battle = {
    digimons: allDigimons,
    combatLog: [],

    turnOrder: [
      ...allDigimons
        .sort((a, b) => {
          if (a.stats.spd > b.stats.spd) {
            return -1
          }

          if (a.stats.spd < b.stats.spd) {
            return 1
          }

          return Math.floor(Math.random() * 3) - 1
        })
        .map((item) => item.id)
    ]
  }

  localStorage.setItem('battle', JSON.stringify(battle))
}
