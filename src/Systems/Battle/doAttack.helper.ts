import type { AttackType } from '@/Types/Attack.type'

import { AllAttacks } from '@/GameData/Attacks'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { getSuccesses } from '@/Helpers/Math/getSuccesses.helper'
import { isDigimonDefeated } from '@/Systems/Battle/isDigimonDefeated.helper'
import { calcStats } from '@/Systems/Battle/calcStats.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const doAttack = (move: string) => {
  const { battle, setBattle } = useBattleStore.getState()
  const { setScene } = useSceneStore.getState()

  const [currentDigimon] = battle?.turnOrder!

  const usedMove: AttackType = AllAttacks[move]

  const possibleTargets = battle?.turnOrder?.filter(
    (target) =>
      target.party !== currentDigimon.party && !isDigimonDefeated(target)
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

  const attack = getSuccesses(
    calcStats({ digimon: currentDigimon, stat: 'tec' })
  )
  const evasion = getSuccesses(calcStats({ digimon: target, stat: 'agi' }))

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
    const power = getSuccesses(
      calcStats({ digimon: currentDigimon, stat: 'pow' })
    )
    const resistance = getSuccesses(calcStats({ digimon: target, stat: 'res' }))
    const severity = Math.min(Math.max(power - resistance, 1), 3)

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
          effect: usedMove.condition,
          severity: (target.conditions?.[usedMove.condition] || 0) + severity,
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
