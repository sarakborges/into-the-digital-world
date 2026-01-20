import type { BattleType, CombatLogType, LootType } from '@/Types/Battle.type'
import type { PartyDigimon, WildDigimonType } from '@/Types/Digimon.type'

import { getDigimonName, randomNumber, progressQuests } from '@/Helpers'

const filterAliveDigimons = ({
  digimons
}: {
  digimons: Array<PartyDigimon>
}) => {
  return digimons.filter((item) => item.currentHp > 0)
}

const checkIsOver = ({ digimons }: { digimons: Array<PartyDigimon> }) => {
  if (
    !digimons.some((item) => item.party === 'player') ||
    !digimons.some((item) => item.party === 'enemy')
  ) {
    return true
  }

  return false
}

const getTarget = ({
  digimons,
  currentDigimon
}: {
  digimons: Array<PartyDigimon>
  currentDigimon: PartyDigimon
}) => {
  const possibleTargets = digimons.filter(
    (item) => item.party !== currentDigimon!.party
  )

  const targetIndex = Math.floor(Math.random() * possibleTargets.length)
  return possibleTargets[targetIndex]
}

const calcDamage = ({
  attacker,
  target
}: {
  attacker: PartyDigimon
  target: PartyDigimon
}) => {
  const damageDealt = Math.max(0, attacker!.stats.atk - target.stats.def)
  const newHp = Math.max(0, target.currentHp - damageDealt)

  return { newHp, damageDealt }
}

const fixDigimonsHp = ({
  digimons,
  target,
  newHp
}: {
  digimons: Array<PartyDigimon>
  target: PartyDigimon
  newHp: number
}) => {
  return digimons.map((item) => {
    if (item.id !== target.id) {
      return item
    }

    if (item.currentHp === newHp) {
      return item
    }

    return {
      ...item,
      currentHp: newHp
    }
  })
}

const getNewTurnOrder = ({ turnOrder }: { turnOrder: Array<string> }) => {
  const [lastTurn, nextTurn, ...others] = turnOrder
  return { lastTurn, nextTurn, others }
}

const getLoot = ({
  isOver,
  winner,
  digimons
}: {
  isOver: boolean
  winner: string
  digimons: Array<PartyDigimon>
}): LootType | undefined => {
  if (!isOver || winner !== 'player') {
    return undefined
  }

  const expGained = digimons.reduce((acc, item) => acc + item.level, 0)
  const loot = {
    cores: {
      family: {},
      attribute: {}
    },
    currency: 0,
    exp: expGained
  }

  for (let digimonItem in digimons) {
    const enemy = digimons[digimonItem] as WildDigimonType
    const lootTable = enemy.lootTable

    for (let lootItem in lootTable) {
      const enemyLoot = enemy.lootTable?.[lootItem]

      if (enemyLoot.type === 'core') {
        const enemyLootQuantity = randomNumber({
          ...enemyLoot.quantity
        })

        const newCoresQuantity =
          (loot.cores?.[enemyLoot.coreType]?.[enemyLoot.coreName] || 0) +
          enemyLootQuantity

        if (loot.cores && loot.cores[enemyLoot.coreType]) {
          loot.cores[enemyLoot.coreType][enemyLoot.coreName] = newCoresQuantity
        }
      }
    }
  }

  return loot
}

export const attackHelper = ({ battle }: { battle: BattleType }) => {
  const { digimons, turnOrder, currentDigimon, combatLog } = battle

  const aliveDigimons = filterAliveDigimons({ digimons })

  // Does nothing if no party has alive digimons
  if (checkIsOver({ digimons: aliveDigimons })) {
    return { ...battle }
  }

  const target = getTarget({
    digimons: aliveDigimons,
    currentDigimon: currentDigimon!
  })

  const { damageDealt, newHp } = calcDamage({
    attacker: currentDigimon!,
    target
  })

  const digimonsWithCorrectHp = fixDigimonsHp({ digimons, target, newHp })

  const aliveDigimonsAfterDamage = filterAliveDigimons({
    digimons: digimonsWithCorrectHp
  })

  const { others, lastTurn, nextTurn } = getNewTurnOrder({ turnOrder })
  const newCurrentDigimon = aliveDigimonsAfterDamage.find(
    (item) => item.id === nextTurn
  )

  const addNewCombatLogEntries = () => {
    const attackerName = getDigimonName(currentDigimon!)
    const targetName = getDigimonName(target)

    const newEntries: CombatLogType = [
      {
        party: currentDigimon!.party,
        text: `${attackerName} attacked ${targetName} and dealt ${damageDealt} damage.`
      }
    ]

    if (newHp <= 0) {
      newEntries.push({
        party: currentDigimon!.party === 'enemy' ? 'player' : 'enemy',
        text: `${targetName} has been defeated.`
      })

      const questsEntries = progressQuests(target)?.entries

      if (questsEntries) {
        for (let entry of questsEntries) {
          newEntries.push(entry)
        }
      }
    }

    return newEntries
  }

  const newEntries = addNewCombatLogEntries()

  const winner = (
    aliveDigimonsAfterDamage.some((item) => item.party === 'player')
      ? 'player'
      : 'enemy'
  ) as 'player' | 'enemy'
  const isOver = checkIsOver({ digimons: aliveDigimonsAfterDamage })

  const loot = getLoot({
    isOver,
    winner,
    digimons: digimonsWithCorrectHp.filter((item) => item.party === 'enemy')
  })

  const currentBattle = {
    currentDigimon: newCurrentDigimon,
    turnOrder: [...others, nextTurn, lastTurn],
    digimons: digimonsWithCorrectHp,
    combatLog: [...combatLog, ...newEntries],
    isOver,
    winner: isOver ? winner : undefined,
    loot
  }

  localStorage.setItem('battle', JSON.stringify(currentBattle))

  return currentBattle
}
