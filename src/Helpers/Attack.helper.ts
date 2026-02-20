import type {
  BattleType,
  CombatLogType,
  CoreLootType,
  LootType
} from '@/Types/Battle.type'
import type { PartyDigimon, WildDigimonType } from '@/Types/Digimon.type'
import { ALL_CORES } from '@/Types/Cores.type'

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
  const updatedHp = Math.max(0, target.currentHp - damageDealt)

  return { updatedHp, damageDealt }
}

const fixDigimonsHp = ({
  digimons,
  target,
  updatedHp
}: {
  digimons: Array<PartyDigimon>
  target: PartyDigimon
  updatedHp: number
}) => {
  return digimons.map((item) => {
    if (item.id !== target.id) {
      return item
    }

    if (item.currentHp === updatedHp) {
      return item
    }

    return {
      ...item,
      currentHp: updatedHp
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
  const loot: {
    cores: Array<CoreLootType>
    currency: number
    exp: number
  } = {
    cores: [],
    currency: 0,
    exp: expGained
  }

  for (let digimonItem of digimons) {
    const { lootTable } = digimonItem as WildDigimonType

    if (!lootTable) {
      continue
    }

    for (let lootItem of lootTable) {
      if (lootItem.type === 'core') {
        const coreIndex = loot.cores?.findIndex(
          (coreItem) => coreItem.coreId === lootItem.coreId
        )

        let currentCoreQuantity = 0
        const enemyLootQuantity = randomNumber({
          ...lootItem.quantity
        })

        if (loot.cores[lootItem.coreId]) {
          currentCoreQuantity =
            loot.cores[coreIndex].quantity + enemyLootQuantity
        }

        if (!loot.cores[lootItem.coreId]) {
          loot.cores.push({
            coreId: lootItem.coreId,
            quantity: enemyLootQuantity,
            coreType: lootItem.coreType
          })
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

  const { damageDealt, updatedHp } = calcDamage({
    attacker: currentDigimon!,
    target
  })

  const digimonsWithCorrectHp = fixDigimonsHp({ digimons, target, updatedHp })

  const aliveDigimonsAfterDamage = filterAliveDigimons({
    digimons: digimonsWithCorrectHp
  })

  const { others, lastTurn, nextTurn } = getNewTurnOrder({ turnOrder })
  const updatedCurrentDigimon = aliveDigimonsAfterDamage.find(
    (item) => item.id === nextTurn
  )

  const addNewCombatLogEntries = () => {
    const attackerName = getDigimonName(currentDigimon!)
    const targetName = getDigimonName(target)

    const updatedEntries: CombatLogType = [
      {
        party: currentDigimon!.party,
        text: `${attackerName} attacked ${targetName} and dealt ${damageDealt} damage.`
      }
    ]

    if (updatedHp <= 0) {
      updatedEntries.push({
        party: currentDigimon!.party === 'enemy' ? 'player' : 'enemy',
        text: `${targetName} has been defeated.`
      })

      const questsEntries = progressQuests(target)?.entries

      if (questsEntries) {
        for (let entry of questsEntries) {
          updatedEntries.push(entry)
        }
      }
    }

    return updatedEntries
  }

  const updatedEntries = addNewCombatLogEntries()

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
    currentDigimon: updatedCurrentDigimon,
    turnOrder: [...others, nextTurn, lastTurn],
    digimons: digimonsWithCorrectHp,
    combatLog: [...combatLog, ...updatedEntries],
    isOver,
    winner: isOver ? winner : undefined,
    loot
  }

  localStorage.setItem('battle', JSON.stringify(currentBattle))

  return currentBattle
}
