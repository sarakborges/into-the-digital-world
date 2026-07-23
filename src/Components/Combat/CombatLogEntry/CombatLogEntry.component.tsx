import type { BattleType } from '@/Types/Battle.type'

import { getTexts } from '@/Helpers/Language'
import { formatLogEntry } from '@/Helpers/Systems/Battle/formatLogEntry.helper'

import '@/Components/Combat/CombatLogEntry/CombatLogEntry.style.scss'
import { Text } from '@/Components/DesignSystem/Text'

type CombatLogEntryProps = {
  logEntry?: BattleType['combatLog'][number]
}

export const CombatLogEntry = ({ logEntry }: CombatLogEntryProps) => {
  if (!logEntry) {
    return
  }

  return (
    <div className="combat-log-entry">
      <div className="turn-title">
        <Text>
          {getTexts('BATTLE_LOG_TURN_TITLE', {
            '[TURN]': String(logEntry.index)
          })}
        </Text>
      </div>

      <Text as="p">{formatLogEntry(logEntry)}</Text>

      {!!logEntry.isTargetDefeated && (
        <div className="target-defeated">
          <Text as="p">
            {getTexts('BATTLE_LOG_DEFEATED', {
              '[TARGET]': logEntry.target
            })}
          </Text>
        </div>
      )}
    </div>
  )
}
