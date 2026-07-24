import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'

import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const warpTo = (location: GameLocation): void => {
  const profile = useProfileStore.getState().profile
  const { setGame } = useGameStore.getState()

  if (!profile) {
    return
  }

  setGame({
    isWarping: true
  })

  setTimeout(() => {
    setProfileSession((currentProfile) => ({
      ...currentProfile,
      currentLocation: location
    }))

    openCurrentTileScene()
  }, 300)

  setTimeout(() => {
    setGame({
      isWarping: false
    })
  }, 600)
}
