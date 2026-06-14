import { warpTo } from '@/Systems/Zones/warpTo.helper'

export const WarpToRestRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'restRoom',
    x: 6,
    y: 11
  })
}
