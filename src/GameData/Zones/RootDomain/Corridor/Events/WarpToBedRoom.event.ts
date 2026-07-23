import { warpTo } from '@/Helpers/Systems/Zones'

export const WarpToBedRoom = () => {
  warpTo({
    zone: 'rootDomain',
    map: 'restRoom',
    x: 7,
    y: 12
  })
}
