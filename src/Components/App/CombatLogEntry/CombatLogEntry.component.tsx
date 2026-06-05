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
        {!!logEntry.hasHitLanded &&
          getTexts('BATTLE_LOG_TURN')
            .replaceAll(
              '[PARTY]',
              logEntry.attackerParty === 'enemies'
                ? getTexts('BATTLE_ATTACK_ENEMIES')
                : ''
            )
            .replaceAll('[NAME]', logEntry.attacker)
            .replaceAll('[TARGET]', logEntry.target)
            .replaceAll('[MOVENAME]', logEntry.attackName)
            .replaceAll(
              '[CONDITION]',
              !logEntry.isTargetDefeated
                ? logEntry.effect?.toLocaleLowerCase()
                : getTexts('BATTLE_LOG_DIGIMON_DEFEATED')
            )
            .replaceAll(
              '[TARGETPARTY]',
              logEntry.attackerParty === 'allies'
                ? getTexts('BATTLE_TARGET_ENEMIES')
                : ''
            )}

        {!logEntry.hasHitLanded &&
          getTexts('BATTLE_LOG_MISS')
            .replaceAll('[TURN]', logEntry.index)
            .replaceAll(
              '[PARTY]',
              logEntry.attackerParty === 'enemies'
                ? getTexts('BATTLE_ATTACK_ENEMIES')
                : ''
            )
            .replaceAll('[NAME]', logEntry.attacker)
            .replaceAll('[TARGET]', logEntry.target)
            .replaceAll('[MOVENAME]', logEntry.attackName)
            .replaceAll(
              '[TARGETPARTY]',
              logEntry.attackerParty === 'allies'
                ? getTexts('BATTLE_TARGET_ENEMIES')
                : ''
            )}
      </Text>

      {!!logEntry.isTargetDefeated && (
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
