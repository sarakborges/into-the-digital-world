import type { MapType } from '@/Types/Map.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { EnemyDigimonType } from '@/Types/Digimon.type'

import { MAX_DIGIMONS_IN_PARTY } from '@/Consts/Battle.consts'

import { randomNumber } from '@/Helpers'
import { ALL_DIGIMONS } from '@/GameData/Digimons'

const setDigimonHpSp = (digimon) => {
  return {
    ...digimon,
    currentHp: digimon.stats.hp,
    currentSp: digimon.stats.sp
  }
}

const addExtraStats = (digimon) => {
  const stats = { ...digimon.stats }

  if (!digimon.extraStats) {
    return stats
  }

  const extraStatsKeys = Object.keys(digimon.extraStats)

  for (let statItem of extraStatsKeys) {
    const extraStat = digimon.extraStats?.[statItem]

    if (extraStat) {
      if (extraStat.type === 'fixed') {
        stats[statItem] += digimon.extraStats[statItem].value
      }
    }
  }

  return stats
}

const getPlayerParty = (profile) => {
  return profile.party?.map((partyItem) => {
    const partnerDigimon = profile.partners?.find(
      (partnerItem) => partnerItem.id === partyItem
    )!

    const stats = addExtraStats({
      ...ALL_DIGIMONS[partnerDigimon.baseDigimon]
    })

    const playerDigimon = {
      id: partnerDigimon.id,
      baseDigimon: partnerDigimon.baseDigimon,
      name: partnerDigimon.name || '',
      stats,
      party: 'player'
    }

    return { ...playerDigimon, ...setDigimonHpSp(playerDigimon) }
  })
}

const getRandomEnemy = (currentMap: MapType) => {
  if (!!currentMap?.eliteDigimons?.length) {
    const spawnableElites: Array<EnemyDigimonType & { isElite: boolean }> = []

    for (let elite of currentMap?.eliteDigimons) {
      const shouldSpawnElite = randomNumber({
        min: 1,
        max: 100
      })

      if (shouldSpawnElite <= elite.spawnChance!) {
        spawnableElites.push({ ...elite, isElite: true })
      }
    }

    if (spawnableElites.length > 0) {
      const spawnedElite = randomNumber({
        min: 0,
        max: spawnableElites.length - 1
      })

      return spawnableElites[spawnedElite]
    }
  }

  const randomEnemy = randomNumber({
    min: 0,
    max: currentMap.enemyDigimons!.length - 1
  })

  return currentMap.enemyDigimons![randomEnemy]
}

const getEnemyParty = (currentMap: MapType) => {
  const quantityOfEnemies = randomNumber({
    min: 1,
    max: currentMap.maxEnemiesPerEncounter || MAX_DIGIMONS_IN_PARTY
  })
  const enemies: EnemyDigimonType[] = []

  for (let i = 0; i < quantityOfEnemies; i++) {
    enemies.push(getRandomEnemy(currentMap))
  }

  return enemies.map((digimonItem, digimonKey) => {
    const stats = addExtraStats({
      ...ALL_DIGIMONS[digimonItem.baseDigimon]
    })

    const enemyDigimon = {
      id: `${digimonItem.id}_${digimonKey}`,
      baseDigimon: digimonItem.baseDigimon,
      stats,
      party: 'enemy',
      isElite: digimonItem.isElite,
      lootTable: digimonItem.lootTable
    }

    return { ...enemyDigimon, ...setDigimonHpSp(enemyDigimon) }
  })
}

const getBoard = (parties) => {
  const board = {
    player: new Array(9).fill(undefined),
    enemy: new Array(9).fill(undefined)
  }

  const boardPositions: {
    player: Array<number>
    enemy: Array<number>
  } = {
    player: [],
    enemy: []
  }

  for (let partyItem of ['player', 'enemy']) {
    for (let _ of parties[partyItem]) {
      while (true) {
        const position = randomNumber({ min: 0, max: 8 })

        if (!boardPositions[partyItem].includes(position)) {
          boardPositions[partyItem].push(position)
          break
        }
      }
    }

    for (let digimonItem in boardPositions[partyItem]) {
      board[partyItem][boardPositions[partyItem][digimonItem]] =
        parties[partyItem][digimonItem].id
    }
  }

  return board
}

const sortTurnOrder = (turnOrder) => {
  return [...turnOrder].sort((a, b) => {
    if (a.stats.spd > b.stats.spd) {
      return -1
    }

    if (a.stats.spd < b.stats.spd) {
      return 1
    }

    return Math.floor(Math.random() * 3) - 1
  })
}

export const startBattleHelper = ({
  currentMap,
  profile
}: {
  currentMap: MapType
  profile: ProfileType
}) => {
  const playerParty = getPlayerParty(profile)
  const enemyParty = getEnemyParty(currentMap)

  const board = getBoard({
    player: playerParty,
    enemy: enemyParty
  })

  const allDigimons = [...playerParty!, ...enemyParty]

  const battle = {
    digimons: allDigimons,
    combatLog: [],
    board,
    turnOrder: sortTurnOrder(allDigimons).map((item) => item.id)
  }

  localStorage.setItem('battle', JSON.stringify(battle))
}
