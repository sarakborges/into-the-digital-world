import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

export const WarpToBedRoom = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'restRoom',
    x: 7,
    y: 12
  })
}
