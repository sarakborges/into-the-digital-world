import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToCoreChamber = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'coreChamber',
    x: 16,
    y: 16
  })
}
