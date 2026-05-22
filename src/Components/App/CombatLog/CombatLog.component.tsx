import { getTexts } from '@/Helpers/getTexts.helper'

import { useBattle } from '@/Hooks/Battle.hook'

import { Text } from '@/Components/System/Text'

import './CombatLog.style.scss'

export const CombatLog = () => {
  const { battle } = useBattle()

  if (!battle) {
    return
  }

  return (
    <div className="combat-log">
      <Text>{getTexts('BATTLE_LOG_TITLE')}</Text>

      {[...battle.combatLog.reverse()].map((logEntry, logIndex) => (
        <div className="log-entry" key={`combat-log-entry-${logIndex + 1}`}>
          <Text as="p">
            {getTexts('BATTLE_LOG_TURN')
              .replaceAll('[TURN]', logIndex + 1)
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
              .replaceAll('[DAMAGE]', logEntry.damage)}
          </Text>
        </div>
      ))}
    </div>
  )
}
