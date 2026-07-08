// Root Domain
import { RootDomainMainRoom } from './RootDomain/MainRoom'
import { RootDomainCorridor } from './RootDomain/Corridor'
import { RootDomainBedRoom } from './RootDomain/BedRoom'

// Wild Zone
import { WildZoneMainRoom } from './WildZone/MainRoom'

import type { ZoneType } from '@/Types/Zone.type'

export type ZoneCategoryType = {
  name: string
  [key: string]: ZoneType | string
}

export const AllZones: Record<string, ZoneCategoryType> = {
  rootDomain: {
    name: 'Root Domain',

    mainRoom: RootDomainMainRoom,
    corridor: RootDomainCorridor,
    restRoom: RootDomainBedRoom
  },

  wildZone: {
    name: 'Wild Zone',

    mainRoom: WildZoneMainRoom
  }
}
