import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/Language/getDialogs.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Dialog } from '@/Components/App/Dialog'
import { CombatLogEntry } from '@/Components/App/CombatLogEntry'
import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { AllItems } from '@/GameData/Items'
import { isDigimonDefeated } from '@/Systems/Battle/isDigimonDefeated.helper'

export const BattleAttack = () => {
  const { setScene } = useSceneStore((state) => state)
  const { battle, setBattle } = useBattleStore((state) => state)

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
          const [currentDigimon, ...otherDigimons] = battle?.turnOrder!

          const nonDefeatedDigimons = battle!.turnOrder.filter(
            (digimon) => !isDigimonDefeated(digimon)
          )

          const alliesWon = nonDefeatedDigimons.every(
            (digimon) => digimon.party === 'allies'
          )

          const enemiesWon = nonDefeatedDigimons.every(
            (digimon) => digimon.party === 'enemies'
          )

          const isBattleOver = !!alliesWon || !!enemiesWon

          const loot = {}

          if (!!alliesWon) {
            for (let digimon of battle!.turnOrder.filter(
              (digimon) => digimon.party === 'enemies'
            )) {
              if (!digimon.lootTable?.length) {
                continue
              }

              for (let item of digimon.lootTable) {
                const rng = generateRandomNumber({ min: 0, max: 100 })

                if (rng < item.dropChance) {
                  loot[item.itemId] = (loot[item.itemId] || 0) + item.amount
                }
              }
            }
          }

          const updatedTurnOrder = [...otherDigimons, currentDigimon]

          setBattle({
            ...battle!,
            loot,
            turnOrder: updatedTurnOrder
          })

          if (!!isBattleOver) {
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
