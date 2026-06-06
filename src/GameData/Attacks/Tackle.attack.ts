import type { AttackType } from '@/Types/Attack.type'

export const TackleAttack: AttackType = {
  id: 'tackle',
  name: 'Tackle',
  description: `Leaps towards it's target, with the intend of pushing them away.`,
  type: 'strike',
  condition: 'shaken'
}
