import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'
import type { ProfileType } from '@/Types/Profile.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'
import { AllNpcs } from '@/GameData/Npcs'

import { WarpToCorridor } from './WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './TriggerGetStarterDigimon.event'

floorTile.possibleSpawns = [
  {
    id: 'koromon',
    spawningChance: 50
  },

  {
    id: 'tunomon',
    spawningChance: 50
  },

  {
    id: 'mocchimon',
    spawningChance: 50
  },

  {
    id: 'tokomon',
    spawningChance: 50
  }
]

const fullFloorRow = {
  1: floorTile,
  2: floorTile,
  3: floorTile,
  4: floorTile,
  5: floorTile,
  6: floorTile,
  7: floorTile,
  8: floorTile,
  9: floorTile,
  10: floorTile,
  11: floorTile,
  12: floorTile,
  13: floorTile,
  14: floorTile,
  15: floorTile,
  16: floorTile,
  17: floorTile
}

const coreRow = {
  1: floorTile,
  2: floorTile,
  3: floorTile,
  4: floorTile,
  5: floorTile,
  6: floorTile,
  12: floorTile,
  13: floorTile,
  14: floorTile,
  15: floorTile,
  16: floorTile,
  17: floorTile
}

const grid: GridType = {
  2: {
    1: floorTile,
    2: floorTile,
    3: floorTile,
    4: floorTile,
    5: floorTile,
    7: floorTile,
    11: floorTile,
    13: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile,
    17: floorTile
  },

  3: {
    2: floorTile,
    3: floorTile,
    4: floorTile,
    5: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile,
    12: floorTile,
    13: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile
  },

  4: { ...fullFloorRow },
  5: { ...fullFloorRow },
  6: { ...fullFloorRow },
  7: { ...coreRow },
  8: { ...coreRow },
  9: { ...coreRow },
  10: { ...coreRow },
  11: { ...coreRow },
  12: { ...fullFloorRow },
  13: { ...fullFloorRow },
  14: { ...fullFloorRow },

  15: {
    2: floorTile,
    3: floorTile,
    4: floorTile,
    6: floorTile,
    7: floorTile,
    8: floorTile,
    9: floorTile,
    10: floorTile,
    11: floorTile,
    12: floorTile,
    14: floorTile,
    15: floorTile,
    16: floorTile
  },

  16: { ...fullFloorRow },

  17: {
    9: floorTile
  }
}

const gridSize = 19
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainMainRoom = ({ profile }: { profile: ProfileType }) => {
  const zoneDetails: ZoneType = {
    id: `RootDomainMainRoom`,
    background: `RootDomain/MainRoom`,
    name: `Root Domain`,
    gridSize,
    grid: filledGrid,

    events: {
      warpToCorridor: (props) => WarpToCorridor(props),
      triggerGetStarterDigimon: (props) => TriggerGetStarterDigimon(props)
    },

    tiles: [
      {
        x: 9,
        y: 18,
        event: 'warpToCorridor'
      },

      {
        x: 9,
        y: 3,
        npc: AllNpcs.gennai,

        condition:
          !!profile?.doneScenes.includes('introduction') &&
          !!profile?.doneScenes.includes('getStarterDigimon')
      },

      {
        x: 9,
        y: 3,
        event: 'triggerGetStarterDigimon',
        npc: AllNpcs.gennai,

        condition:
          !!profile?.doneScenes.includes('introduction') &&
          !profile?.doneScenes.includes('getStarterDigimon')
      }
    ]
  }

  return zoneDetails
}
