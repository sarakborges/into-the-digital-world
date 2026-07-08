import type { BattleType } from '@/Types/Battle.type'

import { getTranslation } from '@/Helpers/Language'

export const formatLogEntry = (
  logEntry: BattleType['combatLog'][number]
): string => {
  const attackerParty = logEntry.attackerParty
  const isEnemyAttacker = attackerParty === 'enemies'

  if (logEntry.hasHitLanded) {
    const isTargetDefeated = logEntry.isTargetDefeated
    const condition = !isTargetDefeated
      ? getTranslation(
          `ATTACK_CONDITION_${logEntry.effect?.toLocaleUpperCase() ?? ''}`
        )
      : getTranslation('BATTLE_LOG_DIGIMON_DEFEATED').toLocaleLowerCase()
    const severity = !isTargetDefeated
      ? ` ${String(logEntry.severity ?? '')}`
      : ''
    const partyText = isEnemyAttacker
      ? getTranslation('BATTLE_ATTACK_ENEMIES')
      : ''
    const targetParty = !isEnemyAttacker
      ? getTranslation('BATTLE_TARGET_ENEMIES')
      : ''

    return getTranslation('BATTLE_LOG_TURN', {
      '[PARTY]': partyText,
      '[NAME]': logEntry.attacker,
      '[TARGET]': logEntry.target,
      '[MOVENAME]': logEntry.attackName,
      '[CONDITION]': condition,
      '[SEVERITY]': severity,
      '[TARGETPARTY]': targetParty
    })
  }

  const partyText = isEnemyAttacker
    ? getTranslation('BATTLE_ATTACK_ENEMIES')
    : ''
  const targetParty = !isEnemyAttacker
    ? getTranslation('BATTLE_TARGET_ENEMIES')
    : ''

  return getTranslation('BATTLE_LOG_MISS', {
    '[TURN]': String(logEntry.index),
    '[PARTY]': partyText,
    '[NAME]': logEntry.attacker,
    '[TARGET]': logEntry.target,
    '[MOVENAME]': logEntry.attackName,
    '[TARGETPARTY]': targetParty
  })
}
