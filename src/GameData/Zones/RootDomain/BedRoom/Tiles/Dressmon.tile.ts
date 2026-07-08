import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { isQuestDone } from '@/Helpers/Systems/Quests'
import { getTranslation } from '@/Helpers/Language'

import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'

import { TriggerAvatarCustomization } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarCustomization.event'
import { TriggerAvatarFixing } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarFixing.event'

export const RootDomainBedRoomDressmonRoomTile: ZoneTileType = {
  id: 'rootDomainBedRoomDressmon',
  x: 11,
  y: 2,
  defaultText: getTranslation('AVATARCUSTOMIZATION_001_TEXT'),
  npc: {
    ...AllNpcs.appmon.dressmon,
    isVisible: false
  },

  events: [
    {
      function: TriggerAvatarFixing,
      eventText: getTranslation('INTRODUCTION_024_TRIGGER'),
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
      eventText: getTranslation('AVATARCUSTOMIZATION_TRIGGER'),
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
