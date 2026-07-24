import type { WarpLocationId } from '@/Consts/Locations.const'
import { WARP_LOCATIONS, isWarpLocationId } from '@/Consts/Locations.const'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAvailableWarpLocations = (): WarpLocationId[] => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return Object.keys(WARP_LOCATIONS)
    .filter(isWarpLocationId)
    .filter((location) => location !== profile.currentLocation.zone)
}
