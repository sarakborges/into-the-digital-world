import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { CombatLogEntry } from '@/Components/App/CombatLogEntry'

import './CombatLog.style.scss'

export const CombatLog = () => {
  const battle = useBattleStore((state) => state.battle)

  if (!battle) {
    return
  }

  return (
    <div className="combat-log">
      <Text>{getTexts('BATTLE_LOG_TITLE')}</Text>

      {[...battle.combatLog.reverse()].map((logEntry, logIndex) => (
        <div className="log-entry" key={`combat-log-entry-${logIndex + 1}`}>
          <CombatLogEntry logEntry={{ ...logEntry, index: logIndex + 1 }} />
        </div>
      ))}
    </div>
  )
}
