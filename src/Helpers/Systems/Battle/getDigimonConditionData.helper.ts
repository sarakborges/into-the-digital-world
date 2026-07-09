import { CONDITIONS } from '@/Consts/Conditions.const'

export const getDigimonConditionData = (
  condition: string
): { color: string; icon: string } => {
  return CONDITIONS[condition] || { color: '#fff', icon: '?' }
}
