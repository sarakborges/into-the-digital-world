import type { BattleType } from '@/Types/Battle.type'

import { getTexts } from '@/Helpers/Language'

const getPartyText = (isEnemyAttacker: boolean): string =>
  isEnemyAttacker ? getTexts('BATTLE_ATTACK_ENEMIES') : ''

const getTargetPartyText = (isEnemyAttacker: boolean): string =>
  !isEnemyAttacker ? getTexts('BATTLE_TARGET_ENEMIES') : ''

export const formatLogEntry = (
  logEntry: BattleType['combatLog'][number]
): string => {
  const isEnemyAttacker = logEntry.attackerParty === 'enemies'

  if (!logEntry.hasHitLanded) {
    return getTexts('BATTLE_LOG_MISS', {
      '[TURN]': String(logEntry.index),
      '[PARTY]': getPartyText(isEnemyAttacker),
      '[NAME]': logEntry.attacker,
      '[TARGET]': logEntry.target,
      '[MOVENAME]': logEntry.attackName,
      '[TARGETPARTY]': getTargetPartyText(isEnemyAttacker)
    })
  }

  const isTargetDefeated = logEntry.isTargetDefeated
  const condition = isTargetDefeated
    ? getTexts('BATTLE_LOG_DIGIMON_DEFEATED').toLocaleLowerCase()
    : getTexts(`ATTACK_CONDITION_${logEntry.effect?.toLocaleUpperCase() ?? ''}`)

  const severity = isTargetDefeated ? '' : ` ${logEntry.severity ?? ''}`

  return getTexts('BATTLE_LOG_TURN', {
    '[PARTY]': getPartyText(isEnemyAttacker),
    '[NAME]': logEntry.attacker,
    '[TARGET]': logEntry.target,
    '[MOVENAME]': logEntry.attackName,
    '[CONDITION]': condition,
    '[SEVERITY]': severity,
    '[TARGETPARTY]': getTargetPartyText(isEnemyAttacker)
  })
}
