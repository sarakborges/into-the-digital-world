// Root Domain
import { RootDomainBedRoom } from './RootDomain/BedRoom'
import { RootDomainCorridor } from './RootDomain/Corridor'
import { RootDomainMainRoom } from './RootDomain/MainRoom'
// Wild Zone
import { WildZoneMainRoom } from './WildZone/MainRoom'

import type { ZoneType } from '@/Types/Zone.type'

export const AllZones: Record<string, ZoneType> = {
  rootDomain: {
    name: 'Root Domain',

    maps: {
      mainRoom: RootDomainMainRoom,
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
