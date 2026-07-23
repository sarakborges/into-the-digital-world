import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { Location000 } from '@/GameData/Scenes/Apps/Location/000.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const LocationGennaiTile: MapTileType = {
  id: 'locationGennai',
  x: 10,
  y: 13,

  npc: {
    ...AllNpcs.general.gennai,
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

    return !!doneQuests.includes(AllQuests.starterDigimon.id)
  }
}
