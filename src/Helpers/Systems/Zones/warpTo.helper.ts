import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'

import { startWarpTransition } from '@/Systems/Session/WarpTransition'

import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'
import { openCurrentTileScene } from '@/Helpers/Systems/Zones/openCurrentTileScene.helper'

import { useProfileStore } from '@/Stores/Profile.store'

export const warpTo = (location: GameLocation): void => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return
  }

  const profileId = profile.id

  startWarpTransition({
    onWarp: () => {
      const currentProfile = useProfileStore.getState().profile

      if (!currentProfile || currentProfile.id !== profileId) {
        return
      }

      const didUpdateProfile = setProfileSession((sessionProfile) => ({
        ...sessionProfile,
        currentLocation: location
      }))

      if (didUpdateProfile) {
        openCurrentTileScene()
      }
    }
  })
}
