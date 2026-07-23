import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { Compose001 } from '@/GameData/Scenes/Apps/Compose/001.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainCoreChamberJijimonTile: MapTileType = {
  id: 'rootDomainCoreChamberJijimon',
  x: 14,
  y: 7,

  npc: {
    ...AllNpcs.digimon.jijimon,
    isVisible: true
  },

  scene: {
    component: Compose001,
    enablesMovement: true
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
