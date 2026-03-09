import type { BattleType, CombatLogType, LootType } from '@/Types/Battle.type'
import type { PartyDigimon, EnemyDigimonType } from '@/Types/Digimon.type'

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
  const damageDealt = Math.max(1, attacker!.stats.atk - target.stats.def)
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

const getNewTurnOrder = ({
  turnOrder,
  digimons
}: {
  turnOrder: Array<string>
  digimons: Array<PartyDigimon>
}) => {
  const aliveDigimons = digimons.map((digimonItem) => digimonItem.id)
  const aliveDigimonsInTurnOrder = turnOrder.filter((turnOrderItem) =>
    aliveDigimons.includes(turnOrderItem)
  )

  const [lastTurn, nextTurn, ...others] = aliveDigimonsInTurnOrder
  return { lastTurn, nextTurn, others }
}

const getLoot = ({
  digimons
}: {
  digimons: Array<PartyDigimon>
}): LootType | undefined => {
  const expGained = digimons.reduce((acc, item) => acc + item.level, 0)

  const loot: LootType = {
    exp: expGained,
    currency: 0,
    items: []
  }

  for (let digimonItem of digimons) {
    const { lootTable } = digimonItem as EnemyDigimonType

    if (!lootTable) {
      continue
    }

    for (let lootItem of lootTable) {
      if (['families', 'attribute', 'digimon'].includes(lootItem.type)) {
        if (!loot.items[lootItem.id]) {
          loot.items.push({
            id: lootItem.id,
            quantity: 0,
            type: lootItem.type
          })
        }

        // Iterates through the maxQuantity, and checks if RNG allows drop. Basically each individual unity of an item will be rolled
        for (
          let currentDrop = 0;
          currentDrop < lootItem.maxQuantity;
          currentDrop++
        ) {
          loot.items = loot.items.map((prevLoot) => {
            if (prevLoot.id !== lootItem.id) {
              return prevLoot
            }

            const rng = randomNumber({
              min: 1,
              max: 100
            })

            const shouldLootDrop = rng <= lootItem.dropChance ? 1 : 0

            return {
              ...prevLoot,
              quantity: prevLoot.quantity + shouldLootDrop
            }
          })
        }
      }

      if (['research'].includes(lootItem.type)) {
        const profile = localStorage.getItem('profile')
        const { researches } = JSON.parse(profile!)

        if (!!researches?.includes(lootItem.id)) {
          continue
        }

        const rng = randomNumber({
          min: 1,
          max: 100
        })

        const shouldLootDrop = rng <= lootItem.dropChance ? 1 : 0

        loot.items.push({
          id: lootItem.id,
          quantity: shouldLootDrop,
          type: lootItem.type
        })
      }
    }
  }

  return loot
}

export const attackHelper = ({ battle }: { battle: BattleType }) => {
  const { digimons, turnOrder, currentDigimon, combatLog, board } = battle

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

  const { others, lastTurn, nextTurn } = getNewTurnOrder({
    turnOrder,
    digimons: aliveDigimonsAfterDamage
  })
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

  const isOver = checkIsOver({ digimons: aliveDigimonsAfterDamage })

  let loot
  if (isOver && aliveDigimonsAfterDamage[0].party === 'player') {
    loot = getLoot({
      digimons: digimonsWithCorrectHp.filter((item) => item.party === 'enemy')
    })
  }

  const currentBattle = {
    currentDigimon: updatedCurrentDigimon,
    turnOrder: [nextTurn, ...others, lastTurn],
    digimons: digimonsWithCorrectHp,
    combatLog: [...combatLog, ...updatedEntries],
    isOver,
    loot,
    board
  }

  localStorage.setItem('battle', JSON.stringify(currentBattle))

  return currentBattle
}
