import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import { getSuccesses } from '@/Helpers/getSuccesses.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const doAttack = () => {
  const { battle, setBattle } = useBattleStore.getState()
  const { setScene } = useSceneStore.getState()

  const [currentDigimon] = battle?.turnOrder!

  const possibleTargets = battle?.turnOrder?.filter(
    (target) => target.party !== currentDigimon.party
  )

  const rngTarget = generateRandomNumber({
    min: 0,
    max: possibleTargets!.length - 1
  })

  const target = possibleTargets![rngTarget]

  const attack = getSuccesses(currentDigimon.stats.tec)
  const evasion = getSuccesses(target.stats.agi)

  if (evasion > attack) {
    setBattle({
      ...battle!,

      combatLog: [
        {
          attacker: currentDigimon.name,
          attackerParty: currentDigimon.party,
          target: target.name,
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
      (acc, cur) => acc + cur.severity,
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
              [Object.keys(digimon.conditions ?? {}).length]: {
                severity
              }
            }
          }
        }

        return digimon
      }),

      combatLog: [
        {
          attacker: currentDigimon.name,
          attackerParty: currentDigimon.party,
          target: target.name,
          isTargetDefeated,
          hasHitLanded: true
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
