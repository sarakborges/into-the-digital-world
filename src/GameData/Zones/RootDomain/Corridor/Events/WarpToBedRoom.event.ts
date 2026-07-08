import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToBedRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'restRoom',
    x: 6,
    y: 11
  })
}
