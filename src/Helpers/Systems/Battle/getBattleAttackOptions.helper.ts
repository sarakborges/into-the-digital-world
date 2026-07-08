import { AllAttacks } from '@/GameData/Attacks'

import { getTranslation } from '@/Helpers/Language'

export const getBattleAttackOptions = (currentTurn: {
  attacks: Record<string, unknown>
  name: string
  party: 'allies' | 'enemies'
  index: number
}) =>
  Object.keys(currentTurn.attacks).map((attack) => ({
    id: attack,
    label: getTranslation('SELECT_ATTACK_OPTION', {
      '[NAME]': AllAttacks[attack].name,
      '[COOLDOWN]': String(AllAttacks[attack].cooldown || 0)
    })
  }))
