import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getDialogs } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { TriggerAvatarFixing } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarFixing.event'
import { TriggerAvatarCustomization } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarCustomization.event'

export const RootDomainBedRoomDressmonRoomTile: ZoneTileType = {
  id: 'rootDomainBedRoomDressmon',
  x: 11,
  y: 2,
  defaultText: getDialogs('AVATARCUSTOMIZATION_001_TEXT'),
  npc: {
    ...AllNpcs.appmon.dressmon,
    isVisible: false
  },

  events: [
    {
      function: TriggerAvatarFixing,
      eventText: getDialogs('INTRODUCTION_024_TRIGGER'),
      eventType: 'important',

      condition: () => {
        const profile = useProfileStore.getState().profile

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !doneQuests.includes(AllQuests.avatarFixing.id)
      }
    },

    {
      function: TriggerAvatarCustomization,
      eventText: getDialogs('AVATARCUSTOMIZATION_TRIGGER'),
      eventType: 'default',

      condition: () => {
        const profile = useProfileStore.getState().profile

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !!doneQuests.includes(AllQuests.avatarFixing.id)
      }
    }
  ]
}
