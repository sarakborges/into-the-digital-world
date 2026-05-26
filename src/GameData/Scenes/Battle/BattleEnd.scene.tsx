import type { DialogType } from '@/Types/Dialog.type'

import { AllNpcs } from '@/GameData/Npcs'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'
import { generateRandomNumber } from '@/Helpers/generateRandomNumber.helper'
import { AllItems } from '@/GameData/Items'

export const BattleEnd = () => {
  const setScene = useSceneStore((state) => state.setScene)

  const setBattle = useBattleStore((state) => state.setBattle)
  const battle = useBattleStore((state) => state.battle)

  const battleResult = battle?.turnOrder.every(
    (digimon) => digimon.party === 'allies'
  )
    ? 'victory'
    : 'defeat'

  const dialogOptions: DialogType = {
    speaker: AllNpcs.appmon.oujamon,

    content: (
      <Text as="p">
        {getDialogs(`BATTLE_END_${battleResult.toLocaleUpperCase()}`)}
      </Text>
    ),

    options: [
      {
        id: 'scene-battle-battleend-continue',
        text: getDialogs('SCENES_CONTINUE_BUTTON'),
        action: () => {
          const battleResult = battle!.turnOrder.every(
            (digimon) => digimon.party === 'allies'
          )
            ? 'victory'
            : 'defeat'

          const loot = {}

          if (battleResult === 'victory') {
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
          }

          setBattle({
            ...battle!,
            result: battleResult,
            loot
          })

          setScene({
            currentScene: 'battle',
            currentStage: 'epilogue'
          })
        }
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
