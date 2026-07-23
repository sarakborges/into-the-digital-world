import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToCorridor = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'corridor',
    x: 2,
    y: 6
  })
}
