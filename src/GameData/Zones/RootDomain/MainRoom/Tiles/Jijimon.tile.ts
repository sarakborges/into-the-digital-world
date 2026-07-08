import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { OpenCompose } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenCompose.event'
import { OpenJijimonIntroduction } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenJijimonIntroduction.event'

import { getTranslation } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainMainRoomJijimonTile: ZoneTileType = {
  id: 'rootDomainMainRoomJijimon',
  x: 14,
  y: 7,
  defaultText: getTranslation('ROOTDOMAIN_JIJIMON_DEFAULT'),

  npc: {
    ...AllNpcs.digimon.jijimon,
    isVisible: true
  },

  events: [
    {
      function: OpenJijimonIntroduction,
      eventText: getTranslation('ROOTDOMAIN_JIJIMON_INTRODUCTION'),

      condition: () => {
        const { profile } = useProfileStore.getState()

        if (!profile) {
          return false
        }

        return !Object.keys(profile.npcAcquaintances ?? {}).includes(
          AllNpcs.digimon.jijimon.id
        )
      }
    },

    {
      function: OpenCompose,
      eventText: getTranslation('ROOTDOMAIN_COMPOSE_TRIGGER'),

      condition: () => {
        const { profile } = useProfileStore.getState()

        if (!profile) {
          return false
        }

        return !!Object.keys(profile.npcAcquaintances ?? {}).includes(
          AllNpcs.digimon.jijimon.id
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
