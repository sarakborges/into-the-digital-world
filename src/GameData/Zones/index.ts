// Root Domain
import { RootDomainMainRoom } from './RootDomain/MainRoom'
import { RootDomainCorridor } from './RootDomain/Corridor'
import { RootDomainRestRoom1 } from './RootDomain/RestRoom1'

export const AllZones = {
  rootDomain: {
    name: 'Root Domain',

    mainRoom: RootDomainMainRoom,
    corridor: RootDomainCorridor,
    restRoom1: RootDomainRestRoom1
  }
}
