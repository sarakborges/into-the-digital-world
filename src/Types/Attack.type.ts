import type { ConditionId } from '@/Types/Condition.type'

export type AttackType = {
  id: string
  name: string
  description: string
  condition: ConditionId
  cooldown?: number
}
