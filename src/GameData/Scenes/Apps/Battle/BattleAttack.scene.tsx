import type { DialogType } from '@/Types/Dialog.type'

import { NpcOujamon } from '@/GameData/Npcs/Oujamon.npc'
import { BattleEnd } from '@/GameData/Scenes/Apps/Battle/BattleEnd.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { generateBattleLoot } from '@/Helpers/Systems/Battle/generateBattleLoot.helper'
import { getBattleResult } from '@/Helpers/Systems/Battle/getBattleResult.helper'
import { saveBattle } from '@/Helpers/Systems/Battle/saveBattle.helper'

import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { CombatLogEntry } from '@/Components/Combat/CombatLogEntry/CombatLogEntry.component'
import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'

export const BattleAttack = () => {
  const { goBackScene, setScene } = useSceneStore((state) => state)
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  const logEntry = battle.combatLog[0]

  if (!logEntry) {
    return
  }

  const handleContinue = () => {
    const currentBattle = useBattleStore.getState().battle

    if (!currentBattle || currentBattle.result) {
      return
    }

    const [currentDigimon, ...otherDigimons] = currentBattle.turnOrder

    if (!currentDigimon) {
      return
    }

    const battleResult = getBattleResult(currentBattle.turnOrder)
    const activeBattle = {
      combatLog: currentBattle.combatLog,
      turnOrder: [...otherDigimons, currentDigimon]
    }

    if (battleResult === 'ongoing') {
      saveBattle(activeBattle)
      goBackScene()
      return
    }

    if (battleResult === 'victory') {
      saveBattle({
        ...activeBattle,
        result: battleResult,
        loot: generateBattleLoot(currentBattle)
      })
    } else {
      saveBattle({ ...activeBattle, result: battleResult })
    }

    setScene({ component: BattleEnd })
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
