// Root Domain
import {RootDomainMainRoom} from './RootDomain/MainRoom'
import {RootDomainCorridor} from './RootDomain/Corridor'
import {RootDomainBedRoom} from './RootDomain/BedRoom'

// Wild Zone
import {WildZoneMainRoom} from './WildZone/MainRoom'

export const AllZones = {
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
