import {warpTo} from '@/Helpers/Systems/Zones'

export const WarpToCorridor = () => {
  warpTo({
    zoneId: 'rootDomain',
    mapId: 'corridor',
    x: 4,
    y: 5
  })
}
