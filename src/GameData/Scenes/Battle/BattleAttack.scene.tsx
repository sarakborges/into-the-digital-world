import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/App/Dialog'
import { CombatLogEntry } from '@/Components/App/CombatLogEntry'

export const BattleAttack = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const setBattle = useBattleStore((state) => state.setBattle)
  const battle = useBattleStore((state) => state.battle)

  const logEntry = battle?.combatLog[0]!

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <div className="text-bubble">
        <CombatLogEntry
          logEntry={{ ...logEntry, index: battle?.combatLog.length }}
        />
      </div>
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
