import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getDialogs } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllQuests } from '@/GameData/Quests'
import { AllNpcs } from '@/GameData/Npcs'
import { OpenCompose } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenCompose.event'
import { OpenJijimonIntroduction } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenJijimonIntroduction.event'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainMainRoomJijimonTile: ZoneTileType = {
  id: 'rootDomainMainRoomJijimon',
  x: 2,
  y: 8,
  defaultText: getDialogs('ROOTDOMAIN_JIJIMON_DEFAULT'),

  npc: {
    ...AllNpcs.digimon.jijimon,
    isVisible: true
  },

  events: [
    {
      function: OpenJijimonIntroduction,
      eventText: getDialogs('ROOTDOMAIN_JIJIMON_INTRODUCTION'),

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
      eventText: getDialogs('ROOTDOMAIN_COMPOSE_TRIGGER'),

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
