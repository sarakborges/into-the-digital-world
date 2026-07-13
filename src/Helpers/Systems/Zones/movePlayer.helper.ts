import { saveSession } from '@/Helpers/Systems/Data'
import { getCurrentMap } from '@/Helpers/Systems/Zones'

import { useProfileStore } from '@/Stores/Profile.store'

export const movePlayer = ({ x, y }: { x?: number; y?: number }) => {
  const { profile } = useProfileStore.getState()
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const updatedX = profile.currentZone.x + (x || 0)
  const updatedY = profile.currentZone.y + (y || 0)

  const updatedProfile = {
    ...profile,

    currentZone: {
      ...profile.currentZone,
      x: updatedX,
      y: updatedY
    }
  }

  saveSession(updatedProfile)

  return { x: updatedX, y: updatedY }
}
