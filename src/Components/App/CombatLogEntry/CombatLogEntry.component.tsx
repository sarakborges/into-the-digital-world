import { getTexts } from '@/Helpers/getTexts.helper'

import { Text } from '@/Components/System/Text'

export const CombatLogEntry = ({ logEntry }) => {
  if (!logEntry) {
    return
  }

  return (
    <>
      <Text as="p">
        {!!logEntry.isHit &&
          getTexts('BATTLE_LOG_TURN')
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
        <Text>
          {getTexts('BATTLE_LOG_DEFEATED').replaceAll(
            '[TARGET]',
            logEntry.target
          )}
        </Text>
      )}
    </>
  )
}
