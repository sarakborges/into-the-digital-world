import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToBedRoom = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'restRoom',
    x: 7,
    y: 12
  })
}
