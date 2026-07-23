import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const movePlayer = ({ x, y }: { x?: number; y?: number }) => {
  const { profile } = useProfileStore.getState()
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const updatedX = profile.currentLocation.x + (x || 0)
  const updatedY = profile.currentLocation.y + (y || 0)

  const updatedProfile = {
    ...profile,

    currentLocation: {
      ...profile.currentLocation,
      x: updatedX,
      y: updatedY
    }
  }

  saveSession(updatedProfile)

  return { x: updatedX, y: updatedY }
}
