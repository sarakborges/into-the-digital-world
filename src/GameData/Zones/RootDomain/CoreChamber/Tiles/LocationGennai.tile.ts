import type { MapTileType } from '@/Types/MapTile.type'

import { NpcGennai } from '@/GameData/Npcs/Gennai.npc'
import { StarterDigimonQuest } from '@/GameData/Quests/StarterDigimon.quest'
import { Location000 } from '@/GameData/Scenes/Apps/Location/000.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const LocationGennaiTile: MapTileType = {
  id: 'locationGennai',
  x: 10,
  y: 13,

  npc: {
    ...NpcGennai,
    isVisible: true
  },

  scene: {
    component: Location000,
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

    return !!doneQuests.includes(StarterDigimonQuest.id)
  }
}
