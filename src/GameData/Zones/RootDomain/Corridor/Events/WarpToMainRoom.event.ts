import { warpTo } from '@/Helpers/warpTo.helper'

export const WarpToMainRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'mainRoom',
    x: 9,
    y: 17
  })
}
