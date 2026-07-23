import { registerZoneMapRegistry } from '@/GameData/Registries/ZoneRuntime.registry'
import type { ZoneRuntimeRegistryType } from '@/GameData/Registries/ZoneRuntime.registry.types'
import { RootDomainBedRoom } from '@/GameData/Zones/RootDomain/BedRoom'
import { RootDomainCoreChamber } from '@/GameData/Zones/RootDomain/CoreChamber'
import { RootDomainCorridor } from '@/GameData/Zones/RootDomain/Corridor'
import { WildZoneMainRoom } from '@/GameData/Zones/WildZone/MainRoom'

export const ZoneMapRegistry = {
  rootDomain: {
    name: 'Root Domain',

    maps: {
      coreChamber: RootDomainCoreChamber,
      corridor: RootDomainCorridor,
      restRoom: RootDomainBedRoom
    }
  },

  wildZone: {
    name: 'Wild Zone',

    maps: {
      mainRoom: WildZoneMainRoom
    }
  }
} satisfies ZoneRuntimeRegistryType

export type ZoneMapRegistryType = typeof ZoneMapRegistry

registerZoneMapRegistry(ZoneMapRegistry)
