import { warpTo } from '@/Helpers/Systems/Zones/warpTo.helper'

export const WarpToCorridor = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'corridor',
    x: 2,
    y: 6
  })
}
