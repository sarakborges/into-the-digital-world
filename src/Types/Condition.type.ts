import type { ReactNode } from 'react'

export type ConditionId =
  'shaken' | 'poisoned' | 'stunned' | 'irritated' | 'distracted'

export type ConditionsType = Record<
  ConditionId,
  {
    icon: ReactNode
    color: string
  }
>
