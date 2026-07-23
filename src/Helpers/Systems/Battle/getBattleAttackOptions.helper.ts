import { getAttack } from '@/GameData/Registries/Attack.registry'

import { getTexts } from '@/Helpers/Language'

export const getBattleAttackOptions = (currentTurn: {
  attacks: Record<string, unknown>
  name: string
  party: 'allies' | 'enemies'
  index: number
}) =>
  Object.keys(currentTurn.attacks).map((attackId) => {
    const attack = getAttack(attackId)

    return {
      id: attackId,
      label: getTexts('SELECT_ATTACK_OPTION', {
        '[NAME]': attack.name,
        '[COOLDOWN]': String(attack.cooldown || 0)
      })
    }
  })
