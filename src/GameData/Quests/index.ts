import type { QuestType } from '@/Types/Quest.type'

import { IntroductionQuest } from './Introduction.quest'
import { StarterDigimonQuest } from './StarterDigimon.quest'

export const AllQuests: {
  [questId: string]: QuestType
} = {
  introduction: IntroductionQuest,
  starterDigimon: StarterDigimonQuest
}
