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

export type WarpLocationId = Extract<keyof typeof WARP_LOCATIONS, string>

export const isWarpLocationId = (
  location: string
): location is WarpLocationId => {
  return location in WARP_LOCATIONS
}
