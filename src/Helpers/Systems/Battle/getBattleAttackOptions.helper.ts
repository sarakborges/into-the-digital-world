import { AllAttacks } from '@/GameData/Attacks'

import { getTexts } from '@/Helpers/Language'

export const getBattleAttackOptions = (currentTurn: {
  attacks: Record<string, unknown>
  name: string
  party: 'allies' | 'enemies'
  index: number
}) =>
  Object.keys(currentTurn.attacks).map((attack) => ({
    id: attack,
    label: getTexts('SELECT_ATTACK_OPTION', {
      '[NAME]': AllAttacks[attack].name,
      '[COOLDOWN]': String(AllAttacks[attack].cooldown || 0)
    })
  }))
