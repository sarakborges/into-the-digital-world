import { ATTACK_TYPES } from '@/Consts/Attack.const'

export type AttackType = {
  id: string
  name: string
  description: string
  type: keyof typeof ATTACK_TYPES
  condition: string
  cooldown?: number
}
