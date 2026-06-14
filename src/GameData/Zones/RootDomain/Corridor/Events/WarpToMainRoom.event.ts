import { warpTo } from '@/Systems/Zones/warpTo.helper'

export const WarpToMainRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'mainRoom',
    x: 9,
    y: 17
  })
}
