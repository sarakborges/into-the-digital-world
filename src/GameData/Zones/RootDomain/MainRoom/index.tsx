import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'
import { getDialogs } from '@/Helpers/getDialogs.helper'

import { AllScenes } from '@/GameData/Scenes'
import { AllNpcs } from '@/GameData/Npcs'
import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './Events/TriggerGetStarterDigimon.event'
import { OpenResearch } from './Events/OpenResearch.event'
import { OpenNanomonIntroduction } from './Events/OpenNanomonIntroduction.event'
import { OpenJijimonIntroduction } from './Events/OpenJijimonIntroduction.event'
import { OpenCompose } from './Events/OpenCompose.event'

import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainMainRoom: ZoneType = {
  id: `rootDomainMainRoom`,
  background: `RootDomain/MainRoom`,
  name: `Root Domain`,
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
      npc: AllNpcs.digimon.nanomon,
      defaultText: getDialogs('RESEARCH_DEFAULT'),

      events: [
        {
          function: OpenNanomonIntroduction,
          eventText: getDialogs('RESEARCH_INTRODUCTION')
        }
      ],

      condition: () => {
        const { profile } = useProfileStore.getState()

        return (
          !!Object.keys(profile!.quests.done).includes(
            AllQuests.starterDigimon.id
          ) &&
          !Object.keys(profile!.npcAcquintances).includes(
            AllNpcs.digimon.nanomon.id
          )
        )
      }
    },

    {
      id: 'nanomon-research',
      x: 9,
      y: 3,
      npc: AllNpcs.digimon.nanomon,
      defaultText: getDialogs('RESEARCH_DEFAULT'),

      events: [
        {
          function: OpenResearch,
          eventText: getDialogs('RESEARCH_SEE_RESEARCHABLE')
        }
      ],

      condition: () => {
        const { profile } = useProfileStore.getState()

        return (
          !!profile?.doneScenes.includes(AllQuests.starterDigimon.id) &&
          !!Object.keys(profile!.npcAcquintances).includes(
            AllNpcs.digimon.nanomon.id
          )
        )
      }
    },

    {
      id: 'jijimon-compose',
      x: 2,
      y: 8,
      npc: AllNpcs.digimon.jijimon,
      defaultText: getDialogs('COMPOSE_DEFAULT'),

      events: [
        {
          function: OpenJijimonIntroduction,
          eventText: getDialogs('COMPOSE_INTRODUCTION')
        }
      ],

      condition: () => {
        const { profile } = useProfileStore.getState()

        return (
          !!Object.keys(profile!.quests.done).includes(
            AllQuests.starterDigimon.id
          ) &&
          !Object.keys(profile!.npcAcquintances).includes(
            AllNpcs.digimon.jijimon.id
          )
        )
      }
    },

    {
      id: 'jijimon-research',
      x: 2,
      y: 8,
      npc: AllNpcs.digimon.jijimon,
      defaultText: getDialogs('COMPOSE_DEFAULT'),

      events: [
        {
          function: OpenCompose,
          eventText: getDialogs('COMPOSE_SEE_COMPOSEABLE')
        }
      ],

      condition: () => {
        const { profile } = useProfileStore.getState()

        return (
          !!Object.keys(profile!.quests.done).includes(
            AllQuests.starterDigimon.id
          ) &&
          !!Object.keys(profile!.npcAcquintances).includes(
            AllNpcs.digimon.jijimon.id
          )
        )
      }
    },

    {
      id: 'gennaiTBA',
      x: 9,
      y: 12,
      npc: AllNpcs.general.gennai,
      defaultText: getDialogs('NPC_DEFAULT_TEXT'),

      condition: () => {
        const profile = useProfileStore.getState().profile
        return (
          !!profile?.doneScenes.includes(AllScenes.introduction.id) &&
          !!profile?.doneScenes.includes(AllScenes.getStarterDigimon.id)
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

      npc: AllNpcs.general.gennai,

      condition: () => {
        const profile = useProfileStore.getState().profile

        return (
          !!profile?.doneScenes.includes(AllScenes.introduction.id) &&
          !profile?.doneScenes.includes(AllScenes.getStarterDigimon.id)
        )
      }
    }
  ]
}
