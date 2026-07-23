import { getZoneMap } from '@/GameData/Registries/ZoneRuntime.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentMap = () => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentLocation) {
    return undefined
  }

  return getZoneMap({
    zone: profile.currentLocation.zone,
    map: profile.currentLocation.map
  })
}
