import { CONDITIONS, isConditionId } from '@/Consts/Conditions.const'

export const getConditionColor = (condition: string): string => {
  return isConditionId(condition) ? CONDITIONS[condition].color : ''
}
