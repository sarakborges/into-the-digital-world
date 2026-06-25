import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const RootDomainBedRoomGennaiRoomTile: ZoneTileType = {
  id: 'rootDomainBedRoomGennai',
  x: 2,
  y: 5,

  condition: () => {
    const profile = useProfileStore.getState().profile
    const scene = useSceneStore.getState().scene

    if (!profile) {
      return false
    }

    const doneQuests = Object.keys(profile.quests).filter((quest) =>
      isQuestDone(quest)
    )

    return (
      !doneQuests.includes(AllQuests.avatarFixing.id) &&
      scene?.currentStage !== '001' &&
      scene?.currentStage !== '002'
    )
  },

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  }
}
