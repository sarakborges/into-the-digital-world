import type {QuestType} from '@/Types/Quest.type'

import {NpcDressmon} from '@/GameData//Npcs/Dressmon.npc'

export const AvatarFixingQuest: QuestType = {
  id: 'avatarFixing',
  name: 'Avatar Fixing',

  objectives: {
    fixAvatar: {
      type: 'interact',
      where: 'rootDomain',
      map: 'restRoom',

      target: {
        id: NpcDressmon.id,
        type: 'appmon'
      }
    }
  }
}
