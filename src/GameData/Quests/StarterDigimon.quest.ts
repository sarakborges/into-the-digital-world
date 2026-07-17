import type { QuestType } from '@/Types/Quest.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'

export const StarterDigimonQuest: QuestType = {
  id: 'starterDigimon',
  name: 'Exploring Root Domain',

  objectives: {
    talkToGennai: {
      type: 'interact',
      where: 'rootDomain',
      map: 'coreChamber',

      target: {
        id: NpcGennai.id,
        type: 'general'
      }
    }
  }
}
