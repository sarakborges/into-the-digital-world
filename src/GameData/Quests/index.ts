import type { QuestType } from '@/Types/Quest.type'

import { StarterDigimonQuest } from './StarterDigimon.quest'
import { IntroductionQuest } from './Introduction.quest'
import { AvatarFixingQuest } from './AvatarFixing.quest'

export const AllQuests: {
  [questId: string]: QuestType
} = {
  introduction: IntroductionQuest,
  starterDigimon: StarterDigimonQuest,
  avatarFixing: AvatarFixingQuest
}
