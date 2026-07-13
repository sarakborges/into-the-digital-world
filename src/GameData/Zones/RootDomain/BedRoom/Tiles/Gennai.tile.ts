import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainBedRoomGennaiRoomTile: MapTileType = {
  id: 'rootDomainBedRoomGennai',
  x: 2,
  y: 5,

  condition: () => {
    const profile = useProfileStore.getState().profile

    if (!profile) {
      return false
    }

    const doneQuests = Object.keys(profile.quests).filter((quest) =>
      isQuestDone(quest)
    )

    return !doneQuests.includes(AllQuests.avatarFixing.id)
  },

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  }
}
