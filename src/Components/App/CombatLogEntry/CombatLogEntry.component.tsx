import { getTexts } from '@/Helpers/getTexts.helper'

import { Text } from '@/Components/System/Text'

import './CombatLogEntry.style.scss'

export const CombatLogEntry = ({ logEntry }) => {
  if (!logEntry) {
    return
  }

  return (
    <div className="combat-log-entry">
      <div className="turn-title">
        <Text>
          {getTexts('BATTLE_LOG_TURN_TITLE').replaceAll(
            '[TURN]',
            logEntry.index
          )}
        </Text>
      </div>

      <Text as="p">
        {!!logEntry.isHit &&
          getTexts('BATTLE_LOG_TURN')
            .replaceAll(
              '[PARTY]',
              logEntry.party === 'enemies'
                ? getTexts('BATTLE_ATTACK_ENEMIES')
                : ''
            )
            .replaceAll('[NAME]', logEntry.attacker)
            .replaceAll('[TARGET]', logEntry.target)
            .replaceAll(
              '[TARGETPARTY]',
              logEntry.party === 'allies'
                ? getTexts('BATTLE_TARGET_ENEMIES')
                : ''
            )
            .replaceAll('[DAMAGE]', logEntry.damage)
            .replaceAll(
              '[CRITICAL]',
              logEntry.isCrit ? getTexts('BATTLE_LOG_CRITICAL') : ''
            )}

        {!logEntry.isHit &&
          getTexts('BATTLE_LOG_MISS')
            .replaceAll('[TURN]', logEntry.index)
            .replaceAll(
              '[PARTY]',
              logEntry.party === 'enemies'
                ? getTexts('BATTLE_ATTACK_ENEMIES')
                : ''
            )
            .replaceAll('[NAME]', logEntry.attacker)
            .replaceAll('[TARGET]', logEntry.target)
            .replaceAll(
              '[TARGETPARTY]',
              logEntry.party === 'allies'
                ? getTexts('BATTLE_TARGET_ENEMIES')
                : ''
            )}
      </Text>

      {!!logEntry.isDefeated && (
        <div className="target-defeated">
          <Text as="p">
            {getTexts('BATTLE_LOG_DEFEATED').replaceAll(
              '[TARGET]',
              logEntry.target
            )}
          </Text>
        </div>
      )}
    </div>
  )
}
