import { WARP_LOCATIONS } from '@/Consts/Locations.const'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAvailableWarpLocations = (): string[] => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return []
  }

  return Object.keys(WARP_LOCATIONS).filter(
    (location) => location !== profile.currentLocation.zone
  )
}
