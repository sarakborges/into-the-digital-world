// Root Domain
import { RootDomainMainRoom } from './RootDomain/MainRoom'
import { RootDomainCorridor } from './RootDomain/Corridor'
import { RootDomainRestRoom } from './RootDomain/RestRoom'

// Wild Zone
import { WildZoneMainRoom } from './WildZone/MainRoom'

export const AllZones = {
  rootDomain: {
    name: 'Root Domain',

    mainRoom: RootDomainMainRoom,
    corridor: RootDomainCorridor,
    restRoom: RootDomainRestRoom
  },

  wildZone: {
    name: 'Wild Zone',

    mainRoom: WildZoneMainRoom
  }
}
