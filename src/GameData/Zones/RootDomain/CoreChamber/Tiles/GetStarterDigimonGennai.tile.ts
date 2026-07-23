import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { GetStarterDigimon000 } from '@/GameData/Scenes/Story/GetStarterDigimon/000.scene'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const GetStarterDigimonGennaiTile: MapTileType = {
  id: 'getStarterDigimonGennaiTile',
  x: 10,
  y: 13,

  npc: {
    ...AllNpcs.general.gennai,
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
      !!doneQuests.includes(AllQuests.avatarFixing.id) &&
      !doneQuests.includes(AllQuests.starterDigimon.id)
    )
  }
}
