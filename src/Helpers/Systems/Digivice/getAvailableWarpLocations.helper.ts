import type { ProfileType } from '@/Types/Profile.type'

import { WARP_LOCATIONS } from '@/Consts/Locations.const'

export const getAvailableWarpLocations = (profile: ProfileType) =>
  Object.keys(WARP_LOCATIONS).filter(
    (location) => location !== profile.currentZone.id
  )
