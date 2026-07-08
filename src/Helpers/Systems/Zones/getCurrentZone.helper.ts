import type { ZoneType } from '@/Types/Zone.type'

import { AllZones } from '@/GameData/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentZone = (): ZoneType | undefined => {
  const { profile } = useProfileStore.getState()

  if (!profile?.currentZone) {
    return undefined
  }

  return AllZones[profile.currentZone.id][profile.currentZone.map] as ZoneType
}
