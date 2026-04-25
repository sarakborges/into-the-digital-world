import type { ZoneType } from '@/Types/Zone.type'

import { defaultTile } from '@/GameData/Zones/default.tile'

import { NpcCulumon } from '@/GameData/Npcs/Culumon.npc'

const defaultRow = {
  1: { ...defaultTile },
  2: { ...defaultTile },
  3: { ...defaultTile },
  4: { ...defaultTile },
  5: { ...defaultTile },
  6: { ...defaultTile },
  7: { ...defaultTile }
}

const defaultGrid = {
  1: { ...defaultRow },
  2: { ...defaultRow },
  3: { ...defaultRow },

  4: {
    1: { ...defaultTile },
    2: {
      npc: NpcCulumon,
      texture: 'black',

      canMove: {
        up: true,
        down: true,
        left: true,
        right: true
      }
    },
    3: { ...defaultTile },
    4: { ...defaultTile },
    5: { ...defaultTile },
    6: { ...defaultTile },
    7: { ...defaultTile }
  },

  5: { ...defaultRow },
  6: { ...defaultRow },
  7: { ...defaultRow }
}

export const RootDomain: ZoneType = {
  id: `RootDomain`,
  name: `Root Domain`,

  spawn: {
    x: 4,
    y: 4
  },

  gridSize: {
    x: 7,
    y: 7
  },

  grid: defaultGrid
}
