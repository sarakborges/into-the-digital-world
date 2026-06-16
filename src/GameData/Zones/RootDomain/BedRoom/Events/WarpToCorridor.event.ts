import { warpTo } from '@/Systems/Zones/warpTo.helper'

export const WarpToCorridor = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 4,
    y: 5
  })
}
