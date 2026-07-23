import type { MapTileType } from '@/Types/MapTile.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { AvatarFixingQuest } from '@/GameData/Quests/AvatarFixing.quest'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'
import { GetStarterDigimon000 } from '@/GameData/Scenes/Story/GetStarterDigimon/000.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const GetStarterDigimonGennaiTile: MapTileType = {
  id: 'getStarterDigimonGennaiTile',
  x: 10,
  y: 13,

  npc: {
    ...NpcGennai,
    isVisible: true
  },

  scene: {
    component: GetStarterDigimon000,
    enablesMovement: true
  },

  condition: () => {
    const profile = useProfileStore.getState().profile

    if (!profile) {
      return false
    }

    const doneQuests = Object.keys(profile.quests).filter((quest) =>
      isQuestDone(quest)
    )

    return (
      !!doneQuests.includes(AvatarFixingQuest.id) &&
      !doneQuests.includes(StarterDigimonQuest.id)
    )
  }
}
