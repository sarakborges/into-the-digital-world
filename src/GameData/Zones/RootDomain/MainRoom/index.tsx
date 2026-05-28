import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { AllScenes } from '@/GameData/Scenes'
import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './Events/TriggerGetStarterDigimon.event'
import { grid } from './MainRoom.grid'
import { getDialogs } from '@/Helpers/getDialogs.helper'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainMainRoom: ZoneType = {
  id: `rootDomainMainRoom`,
  background: `RootDomain/MainRoom`,
  name: `Root Domain`,
  gridSize,
  grid: filledGrid,

  events: {
    warpToCorridor: WarpToCorridor,
    triggerGetStarterDigimon: TriggerGetStarterDigimon
  },

  tiles: [
    {
      id: 'warpToCorridor',
      x: 9,
      y: 18,
      events: [
        {
          eventId: 'warpToCorridor'
        }
      ]
    },

    {
      id: 'nanomon-research',
      x: 9,
      y: 3,
      npc: AllNpcs.digimon.nanomon,
      defaultText: 'Texto que o NPC vai falar quando tu chega perto dele.',

      events: [
        {
          eventId: 'a',
          eventText: 'Quest bem importante aqui',
          eventType: 'important'
        },

        {
          eventId: 'a',
          eventText: 'Qualquer outro diálogo'
        }
      ]
    },

    {
      id: 'gennaiTBA',
      x: 9,
      y: 12,
      npc: AllNpcs.general.gennai,

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
          eventId: 'triggerGetStarterDigimon',
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
