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
    label: getTexts('SELECT_ATTACK_OPTION')
      .replaceAll('[NAME]', AllAttacks[attack].name)
      .replaceAll('[COOLDOWN]', AllAttacks[attack].cooldown || 0)
  }))
