import { getZone } from '@/GameData/Registries/ZoneRuntime.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentZone = () => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentLocation) {
    return undefined
  }

  return getZone(profile.currentLocation.zone)
}
