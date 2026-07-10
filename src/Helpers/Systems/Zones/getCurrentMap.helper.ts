import type { MapType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentMap = (): MapType | undefined => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentZone) {
    return undefined
  }

  return AllZones[profile.currentZone.id].maps[
    profile.currentZone.map
  ] as MapType
}
