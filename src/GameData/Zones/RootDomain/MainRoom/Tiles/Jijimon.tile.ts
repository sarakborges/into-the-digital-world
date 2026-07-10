import type { MapTileType } from '@/Types/MapTile.type'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'
import { OpenCompose } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenCompose.event'
import { OpenJijimonIntroduction } from '@/GameData/Zones/RootDomain/MainRoom/Events/OpenJijimonIntroduction.event'

import { getTexts } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const RootDomainMainRoomJijimonTile: MapTileType = {
  id: 'rootDomainMainRoomJijimon',
  x: 14,
  y: 7,
  defaultText: getTexts('ROOTDOMAIN_JIJIMON_DEFAULT'),

  npc: {
    ...AllNpcs.digimon.jijimon,
    isVisible: true
  },

  events: [
    {
      function: OpenJijimonIntroduction,
      eventText: getTexts('ROOTDOMAIN_JIJIMON_INTRODUCTION'),

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
      eventText: getTexts('ROOTDOMAIN_COMPOSE_TRIGGER'),

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
