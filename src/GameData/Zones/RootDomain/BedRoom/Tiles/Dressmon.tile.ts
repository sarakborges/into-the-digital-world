import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { TriggerAvatarCustomization } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarCustomization.event'
import { TriggerAvatarFixing } from '@/GameData/Zones/RootDomain/BedRoom/Events/TriggerAvatarFixing.event'

import { getTranslation } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

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
