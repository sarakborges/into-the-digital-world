import { useProfileStore } from '@/Stores/Profile.store'
import type { GameType } from '@/Types/Game.type'

import { saveSession } from '@/Helpers/saveSession.helper'

export const warpTo = ({
  setGame,
  zoneId,
  mapId,
  x,
  y
}: {
  setGame: React.Dispatch<React.SetStateAction<GameType | null>>
  zoneId: string
  mapId: string
  x: number
  y: number
}) => {
  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)

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
