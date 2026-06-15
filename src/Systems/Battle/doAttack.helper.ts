import type { AttackType } from '@/Types/Attack.type'

import { AllAttacks } from '@/GameData/Attacks'

import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { getSuccesses } from '@/Helpers/Math/getSuccesses.helper'
import { isDigimonDefeated } from '@/Systems/Battle/isDigimonDefeated.helper'
import { calcExtraStats } from '@/Systems/Battle/calcExtraStats.helper'

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
    calcExtraStats({ digimon: currentDigimon, stat: 'tec' }) +
      currentDigimon.stats.tec
  )
  const evasion = getSuccesses(
    calcExtraStats({ digimon: target, stat: 'agi' }) + target.stats.agi
  )

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
      calcExtraStats({ digimon: currentDigimon, stat: 'pow' }) +
        currentDigimon.stats.pow
    )
    const resistance = getSuccesses(
      calcExtraStats({ digimon: target, stat: 'res' }) + target.stats.res
    )
    const severity = Math.min(Math.max(power - resistance, 1), 3)

    const targetInjuries = Object.values(target.conditions ?? {}).reduce(
      (acc, cur) => acc + cur,
      0
    )

    const isTargetDefeated =
      calcExtraStats({ digimon: target, stat: 'vit' }) + target.stats.vit <=
      targetInjuries + severity

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
