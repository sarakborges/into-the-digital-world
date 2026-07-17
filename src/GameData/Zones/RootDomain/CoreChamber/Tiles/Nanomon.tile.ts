import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { AllScenes } from '@/GameData/Scenes'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainCoreChamberNanomonTile: MapTileType = {
  id: 'rootDomainCoreChamberNanomon',
  x: 6,
  y: 7,

  scene: { ...AllScenes.research['001'], enablesMovement: true },

  npc: {
    ...AllNpcs.digimon.nanomon,
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

    return !!doneQuests.includes(AllQuests.starterDigimon.id)
  }
}
