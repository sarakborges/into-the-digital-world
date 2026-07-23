import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'

export const WARP_LOCATIONS = {
  rootDomain: {
    zone: 'rootDomain',
    map: 'coreChamber',
    x: 9,
    y: 15
  },

  wildZone: {
    zone: 'wildZone',
    map: 'mainRoom',
    x: 9,
    y: 9
  }
} satisfies Record<string, GameLocation>
