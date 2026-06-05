import type { AttackType } from '@/Types/Attack.type'

export const BubblesAttack: AttackType = {
  id: 'bubbles',
  name: 'Bubbles',
  description: `Produces bubbles from its mouth to intimidate the target.`,
  type: 'hinder',
  condition: 'distracted'
}
