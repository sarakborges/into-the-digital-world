import type { ZoneType } from '@/Types/Zone.type'

import { fillGrid } from '@/Helpers/fillGrid'

import { AllScenes } from '@/GameData/Scenes'

import { AllNpcs } from '@/GameData/Npcs'

import { useSceneStore } from '@/Stores/Scene.store'

import { WarpToCorridor } from './Events/WarpToCorridor.event'
import { grid } from './RestRoom1.grid'

const gridSize = 13
const filledGrid = fillGrid({ grid, gridSize })

export const RootDomainRestRoom1: ZoneType = {
  id: `rootDomainRestRoom1`,
  background: `RootDomain/RestRoomLeft`,
  name: `Root Domain`,
  gridSize,
  grid: filledGrid,

  events: {
    warpToCorridor: WarpToCorridor
  },

  tiles: [
    {
      id: 'warpToCorridor',
      x: 6,
      y: 12,
      event: 'warpToCorridor'
    },

    {
      id: 'introductionGennai',
      x: 6,
      y: 7,

      condition: () => {
        const scene = useSceneStore.getState().scene

        return (
          scene?.currentScene === AllScenes.introduction.id &&
          scene?.currentStage !== '001'
        )
      },

      npc: AllNpcs.general.gennai
    }
  ]
}
