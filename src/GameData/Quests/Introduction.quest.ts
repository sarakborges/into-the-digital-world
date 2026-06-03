import type { QuestType } from '@/Types/Quest.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

export const IntroductionQuest: QuestType = {
  id: 'introduction',
  name: 'Introduction',

  objectives: {
    completeTutorial: {
      type: 'interact',
      where: 'rootDomain',

      target: {
        id: NpcGennai.id,
        type: 'general'
      }
    }
  }
}
