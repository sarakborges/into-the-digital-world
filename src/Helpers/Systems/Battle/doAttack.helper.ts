import type { PartyDigimonType } from '@/Types/PartyDigimon.type'
import type { BattleType } from '@/Types/Battle.type'
import type { AttackType } from '@/Types/Attack.type'

import { AllAttacks } from '@/GameData/Attacks'

import {
  isDigimonDefeated,
  calcExtraStats,
  saveBattle
} from '@/Helpers/Systems/Battle'
import { generateRandomNumber } from '@/Helpers/Math'
import { getSuccesses } from '@/Helpers/Math'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

const getPossibleTargets = ({
  battle,
  currentDigimon
}: {
  battle: BattleType
  currentDigimon: PartyDigimonType
}): Array<PartyDigimonType> => {
  return battle.turnOrder.filter(
    (target) =>
      target.party !== currentDigimon.party && !isDigimonDefeated(target)
  )
}

const getRandomTarget = ({
  battle,
  currentDigimon
}: {
  battle: BattleType
  currentDigimon: PartyDigimonType
}): PartyDigimonType | undefined => {
  const possibleTargets = getPossibleTargets({ battle, currentDigimon })

  if (!possibleTargets.length) {
    return undefined
  }

  const rngTarget = generateRandomNumber({
    min: 0,
    max: possibleTargets.length - 1
  })

  return possibleTargets[rngTarget]
}

type CombatLogBaseEntry = Pick<
  BattleType['combatLog'][number],
  'attacker' | 'attackerParty' | 'target' | 'attackName'
>

const buildBaseEntry = ({
  currentDigimon,
  target,
  usedMove
}: {
  currentDigimon: PartyDigimonType
  target: PartyDigimonType
  usedMove: AttackType
}): CombatLogBaseEntry => ({
  attacker: currentDigimon.name,
  attackerParty: currentDigimon.party,
  target: target.name,
  attackName: usedMove.name
})

const buildMissEntry = ({
  baseEntry,
  index
}: {
  baseEntry: CombatLogBaseEntry
  index: number
}): BattleType['combatLog'][number] => ({
  ...baseEntry,
  index,
  hasHitLanded: false
})

const buildHitEntry = ({
  baseEntry,
  target,
  usedMove,
  severity,
  isTargetDefeated,
  index
}: {
  baseEntry: CombatLogBaseEntry
  target: PartyDigimonType
  usedMove: AttackType
  severity: number
  isTargetDefeated: boolean
  index: number
}): BattleType['combatLog'][number] => ({
  ...baseEntry,
  index,
  effect: usedMove.condition,
  severity: (target.conditions?.[usedMove.condition] || 0) + severity,
  hasHitLanded: true,
  isTargetDefeated
})

export const doAttack = (move: string) => {
  const { battle } = useBattleStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!battle) {
    return
  }

  const [currentDigimon] = battle.turnOrder

  if (!currentDigimon) {
    return
  }

  const usedMove: AttackType = AllAttacks[move]

  if (!usedMove) {
    return
  }

  const target = getRandomTarget({ battle, currentDigimon })

  if (!target) {
    return
  }

  const baseEntry = buildBaseEntry({ currentDigimon, target, usedMove })

  const attack = getSuccesses(
    calcExtraStats({ digimon: currentDigimon, stat: 'tec' }) +
      currentDigimon.stats.tec -
      (currentDigimon.conditions?.distracted || 0)
  )
  const evasion = getSuccesses(
    calcExtraStats({ digimon: target, stat: 'agi' }) +
      target.stats.agi -
      (target.conditions?.shaken || 0)
  )

  const didHit = attack >= evasion

  if (!didHit) {
    saveBattle({
      ...battle,
      combatLog: [
        buildMissEntry({
          baseEntry,
          index: battle.combatLog.length + 1
        }),
        ...battle.combatLog
      ]
    })

    setScene({
      currentScene: 'battle',
      currentStage: 'attack'
    })

    return
  }

  const power = getSuccesses(
    calcExtraStats({ digimon: currentDigimon, stat: 'pow' }) +
      currentDigimon.stats.pow
  )
  const resistance = getSuccesses(
    calcExtraStats({ digimon: target, stat: 'res' }) + target.stats.res
  )
  const severity = Math.min(Math.max(power - resistance, 1), 3)

  const isTargetDefeated = isDigimonDefeated({
    ...target,
    conditions: {
      ...target.conditions,
      [usedMove.condition]:
        (target.conditions?.[usedMove.condition] || 0) + severity
    }
  })

  saveBattle({
    ...battle,
    turnOrder: battle.turnOrder.map((digimon) => {
      if (digimon.index === target.index && digimon.party === target.party) {
        return {
          ...digimon,
          conditions: {
            ...(digimon.conditions ?? {}),
            [usedMove.condition]:
              (digimon.conditions?.[usedMove.condition] || 0) + severity
          }
        }
      }

      return digimon
    }),
    combatLog: [
      buildHitEntry({
        baseEntry,
        target,
        usedMove,
        severity,
        isTargetDefeated,
        index: battle.combatLog.length + 1
      }),
      ...battle.combatLog
    ]
  })

  setScene({
    currentScene: 'battle',
    currentStage: 'attack'
  })
}
