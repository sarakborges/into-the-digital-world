import type { QuestType } from '@/Types/Quest.type'

import { StarterDigimonQuest } from './StarterDigimon.quest'

export const AllQuests: {
  [questId: string]: QuestType
} = {
  starterDigimon: StarterDigimonQuest
}
