import type { GridType } from '@/Types/Grid.type'
import type { ZoneType } from '@/Types/Zone.type'
import type { ProfileType } from '@/Types/Profile.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { floorTile } from '@/GameData/Zones/floor.tile'
import { AllNpcs } from '@/GameData/Npcs'
import { AllDigimons } from '@/GameData/Digimons'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { TriggerGetStarterDigimon } from './Events/TriggerGetStarterDigimon.event'

const currentFloorTile = {
  ...floorTile,
  maxEnemies: 3,

  possibleSpawns: {
    [AllDigimons.koromon.id]: {
      spawnChance: 100
    },

    [AllDigimons.dorimon.id]: {
      spawnChance: 100
    }
  }
}

const fullFloorRow = {
  1: { ...currentFloorTile },
  2: { ...currentFloorTile },
  3: { ...currentFloorTile },
  4: { ...currentFloorTile },
  5: { ...currentFloorTile },
  6: { ...currentFloorTile },
  7: { ...currentFloorTile },
  8: { ...currentFloorTile },
  9: { ...currentFloorTile },
  10: { ...currentFloorTile },
  11: { ...currentFloorTile },
  12: { ...currentFloorTile },
  13: { ...currentFloorTile },
  14: { ...currentFloorTile },
  15: { ...currentFloorTile },
  16: { ...currentFloorTile },
  17: { ...currentFloorTile }
}

const coreRow = {
  1: { ...currentFloorTile },
  2: { ...currentFloorTile },
  3: { ...currentFloorTile },
  4: { ...currentFloorTile },
  5: { ...currentFloorTile },
  6: { ...currentFloorTile },
  12: { ...currentFloorTile },
  13: { ...currentFloorTile },
  14: { ...currentFloorTile },
  15: { ...currentFloorTile },
  16: { ...currentFloorTile },
  17: { ...currentFloorTile }
}

const grid: GridType = {
  2: {
    1: { ...currentFloorTile },
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    5: { ...currentFloorTile },
    7: { ...currentFloorTile },
    11: { ...currentFloorTile },
    13: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile },
    17: { ...currentFloorTile }
  },

  3: {
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    5: { ...currentFloorTile },
    6: { ...currentFloorTile },
    7: { ...currentFloorTile },
    8: { ...currentFloorTile },
    9: { ...currentFloorTile },
    10: { ...currentFloorTile },
    11: { ...currentFloorTile },
    12: { ...currentFloorTile },
    13: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile }
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
    2: { ...currentFloorTile },
    3: { ...currentFloorTile },
    4: { ...currentFloorTile },
    6: { ...currentFloorTile },
    7: { ...currentFloorTile },
    8: { ...currentFloorTile },
    9: { ...currentFloorTile },
    10: { ...currentFloorTile },
    11: { ...currentFloorTile },
    12: { ...currentFloorTile },
    14: { ...currentFloorTile },
    15: { ...currentFloorTile },
    16: { ...currentFloorTile }
  },

  16: { ...fullFloorRow },

  17: {
    9: { ...currentFloorTile }
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
