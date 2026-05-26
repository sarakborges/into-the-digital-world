import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import type { BattleType } from '@/Types/Battle.type'

export const BattleTurn = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const setBattle = useBattleStore((state) => state.setBattle)
  const battle = useBattleStore((state) => state.battle)

  const [currentTurn, ...otherTurns] = battle?.turnOrder!

  const doAttack = () => {
    const possibleTargets =
      currentTurn.party === 'allies' ? battle?.enemies : battle?.allies

    const rngTarget = generateRandomNumber({
      min: 0,
      max: possibleTargets!.length - 1
    })

    const target = possibleTargets![rngTarget]

    const hit =
      currentTurn.digimon.stats.tec + generateRandomNumber({ min: 0, max: 100 })
    const evade = target.stats.agi + generateRandomNumber({ min: 0, max: 100 })

    const rngHit = generateRandomNumber({ min: 1, max: 20 })

    if (rngHit === 1 || evade > hit) {
      const updatedBattle: BattleType = {
        ...battle!,

        combatLog: [
          {
            attacker: currentTurn.digimon.name,
            target: target.name,
            damage: 0,
            party: currentTurn.party,
            isDefeated: false,
            isCrit: false,
            isHit: false
          },
          ...battle!.combatLog
        ]
      }

      setBattle({
        ...updatedBattle
      })
    }

    if (rngHit === 20 || hit >= evade) {
      const powVsRes =
        currentTurn.digimon.stats.pow *
        (currentTurn.digimon.stats.pow /
          (currentTurn.digimon.stats.pow + target.stats.res))

      const isCrit = rngHit === 20

      const damage = Math.max(
        0,
        Math.ceil(
          Math.ceil(
            powVsRes +
              generateRandomNumber({
                min: powVsRes / -10,
                max: powVsRes / 10
              })
          ) * (!!isCrit ? 1.5 : 1)
        )
      )

      const updatedBattle: BattleType = {
        ...battle!,

        combatLog: [
          {
            attacker: currentTurn.digimon.name,
            target: target.name,
            damage,
            party: currentTurn.party,
            isDefeated: target.hp - damage <= 0,
            isCrit,
            isHit: true
          },
          ...battle!.combatLog
        ]
      }

      target.hp -= damage

      setBattle({
        ...updatedBattle
      })
    }

    setScene({
      currentScene: 'battle',
      currentStage: 'attack'
    })
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <Text as="p">
        {getDialogs(
          `BATTLE_${currentTurn.party.toLocaleUpperCase()}_TURN_TEXT`
        ).replaceAll('[NAME]', currentTurn.digimon.name)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleturn-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          doAttack()
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
