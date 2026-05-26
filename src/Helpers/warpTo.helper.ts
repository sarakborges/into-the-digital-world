import { useProfileStore } from '@/Stores/Profile.store'
import { useGameStore } from '@/Stores/Game.store'

import { saveSession } from '@/Helpers/saveSession.helper'

export const warpTo = ({
  zoneId,
  mapId,
  x,
  y
}: {
  zoneId: string
  mapId: string
  x: number
  y: number
}) => {
  const profile = useProfileStore.getState().profile
  const setProfile = useProfileStore.getState().setProfile

  const setGame = useGameStore.getState().setGame

  if (!setProfile || !setGame) {
    return
  }

  setGame({
    isWarping: true
  })

  setTimeout(() => {
    const updatedProfile = {
      ...profile!,

      currentZone: {
        id: zoneId,
        map: mapId,
        x: x,
        y: y
      }
    }

    setProfile(updatedProfile)
    saveSession({ key: 'profile', value: updatedProfile })
  }, 300)

  setTimeout(() => {
    setGame({
      isWarping: false
    })
  }, 600)
}
