import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'
import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattle } from '@/Hooks/Battle.hook'
import { useScene } from '@/Hooks/Scene.hook'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const BattleAttack = () => {
  const { setScene } = useScene()
  const { battle, setBattle } = useBattle()

  const lastTurn = battle?.combatLog[0]!

  const dialogOptions: DialogType = {
    speaker: AllNpcs.oujamon,

    content: (
      <Text as="p">
        {getDialogs('BATTLE_ATTACK')
          .replaceAll(
            '[PARTY]',
            lastTurn.party === 'enemies'
              ? getTexts('BATTLE_ATTACK_ENEMIES')
              : ''
          )
          .replaceAll('[NAME]', lastTurn.attacker)
          .replaceAll('[TARGET]', lastTurn.target)
          .replaceAll(
            '[TARGETPARTY]',
            lastTurn.party === 'allies' ? getTexts('BATTLE_TARGET_ENEMIES') : ''
          )
          .replaceAll('[DAMAGE]', lastTurn.damage)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleattack-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const [currentTurn, ...otherTurns] = battle?.turnOrder!
          const updatedTurnOrder = [...otherTurns, currentTurn]

          const filteredTurnOrder = updatedTurnOrder.filter(
            (digimon) => digimon.digimon.hp > 0
          )

          setBattle({
            ...battle!,
            turnOrder: filteredTurnOrder
          })

          if (
            filteredTurnOrder.every((digimon) => digimon.party === 'allies') ||
            filteredTurnOrder.every((digimon) => digimon.party === 'enemies')
          ) {
            setScene({
              currentScene: 'battle',
              currentStage: 'end'
            })

            return
          }

          setScene({
            currentScene: 'battle',
            currentStage: 'turn'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
