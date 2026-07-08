import { getTranslation } from '@/Helpers/Language'

import { useBattleStore } from '@/Stores/Battle.store'

import { CombatLogEntry } from '@/Components/Combat/CombatLogEntry'
import { Text } from '@/Components/DesignSystem/Text'

import './CombatLog.style.scss'

export const CombatLog = () => {
  const { battle } = useBattleStore((state) => state)

  if (!battle) {
    return
  }

  return (
    <div className="combat-log">
      <Text>{getTranslation('BATTLE_LOG_TITLE')}</Text>

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
