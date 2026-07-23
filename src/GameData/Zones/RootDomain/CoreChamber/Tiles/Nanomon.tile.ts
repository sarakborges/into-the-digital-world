import type { MapTileType } from '@/Types/MapTile.type'

import { NpcNanomon } from '@/GameData/Npcs/Nanomon.npc'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'
import { Research001 } from '@/GameData/Scenes/Apps/Research/001.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainCoreChamberNanomonTile: MapTileType = {
  id: 'rootDomainCoreChamberNanomon',
  x: 6,
  y: 7,

  scene: {
    component: Research001,
    enablesMovement: true
  },

  npc: {
    ...NpcNanomon,
    isVisible: true
  },

  condition: () => {
    const { profile } = useProfileStore.getState()

    if (!profile) {
      return false
    }

    const doneQuests = Object.keys(profile.quests).filter((quest) =>
      isQuestDone(quest)
    )

    return !!doneQuests.includes(StarterDigimonQuest.id)
  }
}
