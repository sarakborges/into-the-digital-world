import type { QuestType } from '@/Types/Quest.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

export const IntroductionQuest = {
  id: 'introduction',
  name: 'Introduction',

  objectives: {
    completeTutorial: {
      type: 'interact',
      where: 'rootDomain',
      map: 'coreChamber',

      target: {
        id: NpcGennai.id,
        type: 'general'
      }
    }
  }
} satisfies QuestType
