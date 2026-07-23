import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'
import { BattleEnd } from '@/GameData/Scenes/Apps/Battle/BattleEnd.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'
import { isDigimonDefeated } from '@/Helpers/Systems/Battle/isDigimonDefeated.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLogEntry } from '@/Components/Combat/CombatLogEntry/CombatLogEntry.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'

const getBattleOutcome = (battle) => {
  const nonDefeatedDigimons = battle.turnOrder.filter(
    (digimon) => !isDigimonDefeated(digimon)
  )

  const alliesWon = nonDefeatedDigimons.every(
    (digimon) => digimon.party === 'allies'
  )

  const enemiesWon = nonDefeatedDigimons.every(
    (digimon) => digimon.party === 'enemies'
  )

  return {
    alliesWon,
    enemiesWon,
    isBattleOver: alliesWon || enemiesWon
  }
}

const getLoot = (battle) => {
  const loot = {}

  if (!battle.turnOrder.some((digimon) => digimon.party === 'allies')) {
    return loot
  }

  for (const digimon of battle.turnOrder.filter(
    (entry) => entry.party === 'enemies'
  )) {
    if (!digimon.lootTable?.length) {
      continue
    }

    for (const item of digimon.lootTable) {
      const rng = generateRandomNumber({ min: 0, max: 100 })

      if (rng < item.dropChance) {
        loot[item.itemId] = (loot[item.itemId] || 0) + item.amount
      }
    }
  }

  return loot
}

export const BattleAttack = () => {
  const { goBackScene, setScene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const logEntry = battle.combatLog[0]!

  const handleContinue = () => {
    const [currentDigimon, ...otherDigimons] = battle.turnOrder!
    const { isBattleOver } = getBattleOutcome(battle)
    const loot = getLoot(battle)
    const updatedTurnOrder = [...otherDigimons, currentDigimon]

    saveBattle({
      ...battle,
      loot,
      turnOrder: updatedTurnOrder
    })

    if (isBattleOver) {
      setScene({ component: BattleEnd })

      return
    }

    goBackScene()
  }

  const dialogOptions: DialogType = {
    speaker: NpcOujamon,

    content: (
      <div className="text-bubble">
        <CombatLogEntry
          logEntry={{ ...logEntry, index: battle.combatLog.length }}
        />
      </div>
    ),

    options: [
      {
        id: 'scene-battle-battleattack-continue',
        text: getTexts('SCENES_CONTINUE_BUTTON'),
        action: handleContinue
      }
    ]
  }

  return <Dialog {...dialogOptions} />
}
