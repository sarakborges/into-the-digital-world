import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { AllScenes } from '@/GameData/Scenes'
import { AllNpcs } from '@/GameData/Npcs'

import { useProfileStore } from '@/Stores/Profile.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './Events/TriggerGetStarterDigimon.event'
import { grid } from './MainRoom.grid'

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

const profile = useProfileStore.getState().profile

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
      event: 'warpToCorridor'
    },

    {
      id: 'gennaiTBA',
      x: 9,
      y: 3,
      npc: AllNpcs.general.gennai,

      condition:
        !!profile?.doneScenes.includes(AllScenes.introduction.id) &&
        !!profile?.doneScenes.includes(AllScenes.getStarterDigimon.id)
    },

    {
      id: 'gennaiGetStarter',
      x: 9,
      y: 3,
      event: 'triggerGetStarterDigimon',
      npc: AllNpcs.general.gennai,

      condition:
        !!profile?.doneScenes.includes(AllScenes.introduction.id) &&
        !profile?.doneScenes.includes(AllScenes.getStarterDigimon.id)
    }
  ]
}
