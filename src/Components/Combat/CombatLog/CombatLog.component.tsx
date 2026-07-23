import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import '@/Components/Combat/CombatLog/CombatLog.style.scss'
import { CombatLogEntry } from '@/Components/Combat/CombatLogEntry/CombatLogEntry.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

export const CombatLog = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  return (
    <div className="combat-log">
      <Text>{getTexts('BATTLE_LOG_TITLE')}</Text>

      {[...battle.combatLog].map((logEntry, logIndex) => (
        <div
          className="log-entry"
          key={`combat-log-entry-${battle.combatLog.length - logIndex}`}
        >
          <CombatLogEntry
            logEntry={{
              ...logEntry,
              index: battle.combatLog.length - logIndex
            }}
          />
        </div>
      ))}
    </div>
  )
}
