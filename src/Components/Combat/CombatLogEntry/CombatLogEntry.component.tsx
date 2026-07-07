import { getTexts } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'

import type { BattleType } from '@/Types/Battle.type'

import './CombatLogEntry.style.scss'

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
          {getTexts('BATTLE_LOG_TURN_TITLE').replaceAll(
            '[TURN]',
            String(logEntry.index)
          )}
        </Text>
      </div>

      <Text as="p">
        {!!logEntry.hasHitLanded
          ? getTexts('BATTLE_LOG_TURN')
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
                  ? getTexts(
                      `ATTACK_CONDITION_${logEntry.effect?.toLocaleUpperCase() ?? ''}`
                    )
                  : getTexts('BATTLE_LOG_DIGIMON_DEFEATED').toLocaleLowerCase()
              )
              .replaceAll(
                '[SEVERITY]',
                !logEntry.isTargetDefeated
                  ? ` ${String(logEntry.severity ?? '')}`
                  : ''
              )
              .replaceAll(
                '[TARGETPARTY]',
                logEntry.attackerParty === 'allies'
                  ? getTexts('BATTLE_TARGET_ENEMIES')
                  : ''
              )
          : getTexts('BATTLE_LOG_MISS')
              .replaceAll('[TURN]', String(logEntry.index))
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
