import { CONDITIONS } from '@/Consts/Conditions.const'

export const getConditionColor = (condition: string): string => {
  return CONDITIONS[condition]?.color || ''
}
