import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { isQuestDone } from '@/Helpers/Systems/Quests'
import { getTranslation } from '@/Helpers/Language'

import { TriggerGetStarterDigimon } from '@/GameData/Zones/RootDomain/MainRoom/Events/TriggerGetStarterDigimon.event'
import { OpenLocation } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenLocation.event'
import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainMainRoomGennaiTile: ZoneTileType = {
  id: 'rootDomainMainRoomGennai',
  x: 10,
  y: 13,
  defaultText: getTranslation('ROOTDOMAIN_GENNAI_DEFAULT'),

  events: [
    {
      function: TriggerGetStarterDigimon,
      eventText: getTranslation('ROOTDOMAIN_GETSTARTERDIGIMON_TRIGGER'),
      eventType: 'important',

      condition: () => {
        const profile = useProfileStore.getState().profile

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return !doneQuests.includes(AllQuests.starterDigimon.id)
      }
    },

    {
      function: OpenLocation,
      eventText: getTranslation('ROOTDOMAIN_LOCATION_TRIGGER'),
      eventType: 'default',

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
  ],

  npc: {
    ...AllNpcs.general.gennai,
    isVisible: true
  },

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
