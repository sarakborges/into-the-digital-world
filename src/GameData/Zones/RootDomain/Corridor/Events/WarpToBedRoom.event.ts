import { warpTo } from '@/Systems/Zones/warpTo.helper'

export const WarpToBedRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'restRoom',
    x: 6,
    y: 11
  })
}
