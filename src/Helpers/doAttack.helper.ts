import type { AttackType } from '@/Types/Attack.type'

import { AllAttacks } from '@/GameData/Attacks'

import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import { getSuccesses } from '@/Helpers/getSuccesses.helper'
import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const doAttack = (move: string) => {
  const { battle, setBattle } = useBattleStore.getState()
  const { setScene } = useSceneStore.getState()

  const [currentDigimon] = battle?.turnOrder!

  const usedMove: AttackType = AllAttacks[move]

  const possibleTargets = battle?.turnOrder?.filter(
    (target) => target.party !== currentDigimon.party
  )

  const rngTarget = generateRandomNumber({
    min: 0,
    max: possibleTargets!.length - 1
  })

  const target = possibleTargets![rngTarget]

  const baseEntry = {
    attacker: currentDigimon.name,
    attackerParty: currentDigimon.party,
    target: target.name,
    attackName: usedMove.name
  }

  const attack = getSuccesses(currentDigimon.stats.tec)
  const evasion = getSuccesses(target.stats.agi)

  if (evasion > attack) {
    setBattle({
      ...battle!,

      combatLog: [
        {
          ...baseEntry,
          hasHitLanded: false
        },
        ...battle!.combatLog
      ]
    })
  }

  if (attack >= evasion) {
    const power = getSuccesses(currentDigimon.stats.pow)
    const resistance = getSuccesses(target.stats.res)
    const severity = Math.max(power - resistance, 1)

    const targetInjuries = Object.values(target.conditions ?? {}).reduce(
      (acc, cur) => acc + cur,
      0
    )

    const isTargetDefeated = target.stats.vit <= targetInjuries + severity

    setBattle({
      ...battle!,

      turnOrder: battle!.turnOrder.map((digimon) => {
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
        {
          ...baseEntry,
          effect: getTexts(
            `ATTACK_CONDITION_${usedMove.condition.toLocaleUpperCase()}${(target.conditions?.[usedMove.condition] || 0) + severity}`
          ),
          hasHitLanded: true,
          isTargetDefeated
        },
        ...battle!.combatLog
      ]
    })
  }

  setScene({
    currentScene: 'battle',
    currentStage: 'attack'
  })
}
