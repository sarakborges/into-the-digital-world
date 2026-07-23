import type { MapType } from '@/Types/Zone.type'

import { getZoneMap } from '@/GameData/Registries/ZoneRuntime.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentMap = (): MapType | undefined => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentZone) {
    return undefined
  }

  return getZoneMap({
    zone: profile.currentZone.id,
    map: profile.currentZone.map
  }) as MapType
}
