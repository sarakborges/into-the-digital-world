import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { getCurrentMap } from '@/Helpers/Systems/Zones/getCurrentMap.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export type MovePlayerParams = {
  x: number
  y: number
}

export const movePlayer = ({ x, y }: MovePlayerParams) => {
  const profile = useProfileStore.getState().profile
  const currentMap = getCurrentMap()

  if (!profile || !currentMap) {
    return false
  }

  const updatedX = profile.currentLocation.x + x
  const updatedY = profile.currentLocation.y + y

  setProfileSession({
    ...profile,

    currentLocation: {
      ...profile.currentLocation,
      x: updatedX,
      y: updatedY
    }
  })

  return { x: updatedX, y: updatedY }
}
