import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export type MovePlayerParams = {
  x: number
  y: number
}

export const movePlayer = ({ x, y }: MovePlayerParams) => {
  const { profile } = useProfileStore.getState()
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const updatedX = profile.currentLocation.x + x
  const updatedY = profile.currentLocation.y + y

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
