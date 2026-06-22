import type {ZoneType} from '@/Types/Zone.type'

import {fillGrid} from '@/Helpers/Systems/Zones'
import {getDialogs} from '@/Helpers/Language'
import {isQuestDone} from '@/Helpers/Systems/Quests'

import {AllNpcs} from '@/GameData/Npcs'
import {AllQuests} from '@/GameData/Quests'

import {useProfileStore} from '@/Stores/Profile.store'

import {WarpToCorridor} from './Events/WarpToCorridor.event'
import {TriggerGetStarterDigimon} from './Events/TriggerGetStarterDigimon.event'
import {OpenResearch} from './Events/OpenResearch.event'
import {OpenNanomonIntroduction} from './Events/OpenNanomonIntroduction.event'
import {OpenJijimonIntroduction} from './Events/OpenJijimonIntroduction.event'
import {OpenCompose} from './Events/OpenCompose.event'

import {OpenLocation} from './Events/OpenLocation.event'

import {grid} from './MainRoom.grid'

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
      id: 'nanomon-introduction',
      x: 9,
      y: 3,
      defaultText: getDialogs('RESEARCH_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.nanomon,
        isVisible: true
      },

      events: [
        {
          function: OpenNanomonIntroduction,
          eventText: getDialogs('RESEARCH_INTRODUCTION')
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

        return (
          !!doneQuests.includes(AllQuests.starterDigimon.id) &&
          !Object.keys(profile.npcAcquaintances ?? {}).includes(
            AllNpcs.digimon.nanomon.id
          )
        )
      }
    },

    {
      id: 'nanomon-research',
      x: 9,
      y: 3,
      defaultText: getDialogs('RESEARCH_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.nanomon,
        isVisible: true
      },

      events: [
        {
          function: OpenResearch,
          eventText: getDialogs('RESEARCH_SEE_RESEARCHABLE')
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

        return (
          !!doneQuests.includes(AllQuests.starterDigimon.id) &&
          !!Object.keys(profile.npcAcquaintances ?? {}).includes(
            AllNpcs.digimon.nanomon.id
          )
        )
      }
    },

    {
      id: 'jijimon-compose',
      x: 2,
      y: 8,
      defaultText: getDialogs('COMPOSE_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.jijimon,
        isVisible: true
      },

      events: [
        {
          function: OpenJijimonIntroduction,
          eventText: getDialogs('COMPOSE_INTRODUCTION')
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

        return (
          !!doneQuests.includes(AllQuests.starterDigimon.id) &&
          !Object.keys(profile.npcAcquaintances ?? {}).includes(
            AllNpcs.digimon.jijimon.id
          )
        )
      }
    },

    {
      id: 'jijimon-research',
      x: 2,
      y: 8,
      defaultText: getDialogs('COMPOSE_DEFAULT'),

      npc: {
        ...AllNpcs.digimon.jijimon,
        isVisible: true
      },

      events: [
        {
          function: OpenCompose,
          eventText: getDialogs('COMPOSE_SEE_COMPOSEABLE')
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

        return (
          !!doneQuests.includes(AllQuests.starterDigimon.id) &&
          !!Object.keys(profile.npcAcquaintances ?? {}).includes(
            AllNpcs.digimon.jijimon.id
          )
        )
      }
    },

    {
      id: 'gennaiGetStarter',
      x: 9,
      y: 12,
      defaultText: getDialogs('GETSTARTERDIGIMON_DEFAULTTEXT'),

      events: [
        {
          function: TriggerGetStarterDigimon,
          eventText: getDialogs('GETSTARTERDIGIMON_TRIGGER'),
          eventType: 'important'
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

        return (
          !!doneQuests.includes(AllQuests.avatarFixing.id) &&
          !doneQuests.includes(AllQuests.starterDigimon.id)
        )
      }
    },

    {
      id: 'gennaiFastTravel',
      x: 9,
      y: 12,
      defaultText: getDialogs('LOCATION_001_TEXT'),

      npc: {
        ...AllNpcs.general.gennai,
        isVisible: true
      },

      events: [
        {
          function: OpenLocation,
          eventText: getDialogs('LOCATION_TRIGGER'),
          eventType: 'default'
        }
      ],

      condition: () => {
        const profile = useProfileStore.getState().profile

        if (!profile) {
          return false
        }

        const doneQuests = Object.keys(profile.quests).filter((quest) =>
          isQuestDone(quest)
        )

        return (
          !!doneQuests.includes(AllQuests.introduction.id) &&
          !!doneQuests.includes(AllQuests.starterDigimon.id)
        )
      }
    }
  ]
}
