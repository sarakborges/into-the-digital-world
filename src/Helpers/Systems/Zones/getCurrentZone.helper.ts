import type { ZoneType } from '@/Types/Zone.type'

import { getZone } from '@/GameData/Registries/ZoneRuntime.registry'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCurrentZone = (): ZoneType | undefined => {
  const profile = useProfileStore.getState().profile

  if (!profile?.currentZone) {
    return undefined
  }

  return getZone(profile.currentZone.id) as ZoneType
}
