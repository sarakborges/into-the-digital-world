import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { OpenNanomonIntroduction } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenNanomonIntroduction.event'
import { OpenResearch } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenResearch.event'

import { getTranslation } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainMainRoomNanomonTile: ZoneTileType = {
  id: 'rootDomainMainRoomNanomon',
  x: 6,
  y: 7,
  defaultText: getTranslation('ROOTDOMAIN_NANOMON_DEFAULT'),

  npc: {
    ...AllNpcs.digimon.nanomon,
    isVisible: true
  },

  events: [
    {
      function: OpenNanomonIntroduction,
      eventText: getTranslation('ROOTDOMAIN_NANOMON_INTRODUCTION'),

      condition: () => {
        const { profile } = useProfileStore.getState()

        if (!profile) {
          return false
        }

        return !Object.keys(profile.npcAcquaintances ?? {}).includes(
          AllNpcs.digimon.nanomon.id
        )
      }
    },

    {
      function: OpenResearch,
      eventText: getTranslation('ROOTDOMAIN_RESEARCH_TRIGGER'),

      condition: () => {
        const { profile } = useProfileStore.getState()

        if (!profile) {
          return false
        }

        return !!Object.keys(profile.npcAcquaintances ?? {}).includes(
          AllNpcs.digimon.nanomon.id
        )
      }
    }
  ],

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
