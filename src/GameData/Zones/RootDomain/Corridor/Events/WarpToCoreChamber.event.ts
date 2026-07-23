import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

export const WarpToCoreChamber = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'coreChamber',
    x: 16,
    y: 16
  })
}
