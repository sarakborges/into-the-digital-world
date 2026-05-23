import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import type { BattleType } from '@/Types/Battle.type'

export const BattleTurn = () => {
  const { setScene } = useScene()
  const { battle, setBattle } = useBattle()

  const [currentTurn, ...otherTurns] = battle?.turnOrder!

  const doAttack = () => {
    const possibleTargets =
      currentTurn.party === 'allies' ? battle?.enemies : battle?.allies

    const rngTarget = generateRandomNumber({
      min: 0,
      max: possibleTargets!.length - 1
    })

    const target = possibleTargets![rngTarget]

    const powVsRes = currentTurn.digimon.stats.pow - target.stats.res
    const damage = Math.max(
      0,
      Math.ceil(
        powVsRes +
          generateRandomNumber({
            min: powVsRes / -10,
            max: powVsRes / 10
          })
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
          hasFainted: target.hp - damage <= 0
        },
        ...battle!.combatLog
      ]
    }

    target.hp -= damage

    setBattle({
      ...updatedBattle
    })

    setScene({
      currentScene: 'battle',
      currentStage: 'attack'
    })
  }

  const dialogOptions: DialogType = {
    speaker: AllNpcs.oujamon,

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
