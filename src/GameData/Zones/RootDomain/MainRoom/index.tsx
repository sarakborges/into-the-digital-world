import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/Systems/Zones'
import { getDialogs } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './Events/TriggerGetStarterDigimon.event'
import { OpenResearch } from './Events/OpenResearch.event'
import { OpenNanomonIntroduction } from './Events/OpenNanomonIntroduction.event'
import { OpenJijimonIntroduction } from './Events/OpenJijimonIntroduction.event'
import { OpenCompose } from './Events/OpenCompose.event'

import { OpenLocation } from './Events/OpenLocation.event'

import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainMainRoom: ZoneType = {
  id: `rootDomainMainRoom`,
  background: `RootDomain/MainRoom`,
  name: `Main Room`,
  gridSize,
  grid: filledGrid,

  tiles: [
    {
      id: 'warpToCorridor',
      x: 9,
      y: 18,
      onEnter: {
        function: WarpToCorridor
      }
    },

    {
      id: 'nanomon',
      x: 9,
      y: 3,
      defaultText: getDialogs('NANOMON_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.nanomon,
        isVisible: true
      },

      events: [
        {
          function: OpenNanomonIntroduction,
          eventText: getDialogs('NANOMON_INTRODUCTION'),

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
          eventText: getDialogs('RESEARCH_TRIGGER'),

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
    },

    {
      id: 'jijimon',
      x: 2,
      y: 8,
      defaultText: getDialogs('JIJIMON_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.jijimon,
        isVisible: true
      },

      events: [
        {
          function: OpenJijimonIntroduction,
          eventText: getDialogs('JIJIMON_INTRODUCTION'),

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
          eventText: getDialogs('COMPOSE_TRIGGER'),

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
    },

    {
      id: 'gennai',
      x: 9,
      y: 12,
      defaultText: getDialogs('GENNAI_DEFAULT'),

      events: [
        {
          function: TriggerGetStarterDigimon,
          eventText: getDialogs('GETSTARTERDIGIMON_TRIGGER'),
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
          eventText: getDialogs('LOCATION_TRIGGER'),
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
  ]
}
