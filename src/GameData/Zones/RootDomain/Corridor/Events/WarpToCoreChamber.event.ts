import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToCoreChamber = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'coreChamber',
    x: 16,
    y: 16
  })
}
