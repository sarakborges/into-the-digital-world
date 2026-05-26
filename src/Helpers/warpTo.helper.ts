import type { ProfileType } from '@/Types/Profile.type'
import type { GameType } from '@/Types/Game.type'

import { saveSession } from '@/Helpers/saveSession.helper'

export const warpTo = ({
  setGame,
  profile,
  setProfile,
  zoneId,
  mapId,
  x,
  y
}: {
  setGame: React.Dispatch<React.SetStateAction<GameType | null>>
  profile: ProfileType
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
  zoneId: string
  mapId: string
  x: number
  y: number
}) => {
  if (!setProfile || !setGame) {
    return
  }

  setGame({
    isWarping: true
  })

  setTimeout(() => {
    const updatedProfile = {
      ...profile,

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
