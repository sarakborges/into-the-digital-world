import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToMainRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'mainRoom',
    x: 9,
    y: 17
  })
}
