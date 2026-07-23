import type { QuestType } from '@/Types/Quest.type'

import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'

export const QuestRegistry: {
  [questId: string]: QuestType
} = {
  introduction: IntroductionQuest,
  starterDigimon: StarterDigimonQuest,
  avatarFixing: AvatarFixingQuest
}
