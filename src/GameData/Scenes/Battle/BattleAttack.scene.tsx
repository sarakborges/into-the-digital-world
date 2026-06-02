import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/App/Dialog'
import { CombatLogEntry } from '@/Components/App/CombatLogEntry'
import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import { AllItems } from '@/GameData/Items'

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

            if (
              filteredTurnOrder.every((digimon) => digimon.party === 'enemies')
            ) {
              setBattle({
                ...battle!,
                result: 'defeat'
              })

              return
            }

            const loot = {}

            for (let digimon of battle!.enemies) {
              if (!!digimon.lootTable?.length) {
                for (let item of digimon.lootTable) {
                  const rng = generateRandomNumber({ min: 0, max: 100 })

                  if (rng < item.dropChance) {
                    loot[item.itemId] = {
                      ...AllItems[item.itemId],
                      amount: (loot[item.itemId]?.amount || 0) + item.amount
                    }
                  }
                }
              }
            }

            setBattle({
              ...battle!,
              result: 'victory',
              loot
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
