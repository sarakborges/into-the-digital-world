import { AvatarFixingQuest } from './AvatarFixing.quest'
import { IntroductionQuest } from './Introduction.quest'
import { StarterDigimonQuest } from './StarterDigimon.quest'

import type { QuestType } from '@/Types/Quest.type'

export const QuestRegistry: {
  [questId: string]: QuestType
} = {
  introduction: IntroductionQuest,
  starterDigimon: StarterDigimonQuest,
  avatarFixing: AvatarFixingQuest
}
