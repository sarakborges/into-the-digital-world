// Root Domain
import { RootDomainBedRoom } from './RootDomain/BedRoom'
import { RootDomainCoreChamber } from './RootDomain/CoreChamber'
import { RootDomainCorridor } from './RootDomain/Corridor'
// Wild Zone
import { WildZoneMainRoom } from './WildZone/MainRoom'

import type { ZoneType } from '@/Types/Zone.type'

export const AllZones: Record<string, ZoneType> = {
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
}
