import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'

import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

export const warpTo = (location: GameLocation) => {
  const { profile } = useProfileStore.getState()
  const { setGame } = useGameStore.getState()

  if (!profile) {
    return
  }

  setGame({
    isWarping: true
  })

  setTimeout(() => {
    const updatedProfile = {
      ...profile,

      currentLocation: location
    }

    saveSession(updatedProfile)
    openCurrentTileScene()
  }, 300)

  setTimeout(() => {
    setGame({
      isWarping: false
    })
  }, 600)
}
