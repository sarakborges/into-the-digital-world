import type { RegionType } from '@/Types/Map.type'

import {
  BINARY_FOREST,
  KERNEL_LAKE,
  PRIMARY_VILLAGE,
  ROOT_CORE,
  SUBROOT_GROVE
} from '@/GameData/Maps'

export const ROOT_DOMAIN: RegionType = {
  id: `ROOT_DOMAIN`,
  name: `Root Domain`,
  maps: [PRIMARY_VILLAGE, BINARY_FOREST, SUBROOT_GROVE, KERNEL_LAKE, ROOT_CORE]
}
