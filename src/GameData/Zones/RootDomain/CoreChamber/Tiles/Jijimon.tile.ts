import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { AllScenes } from '@/GameData/Scenes'

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

  scene: { ...AllScenes.compose['001'], enablesMovement: true },

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
