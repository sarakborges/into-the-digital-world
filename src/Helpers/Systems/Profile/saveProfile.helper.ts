import type { ProfileType } from '@/Types/Profile.type'

import { GAME_VERSION } from '@/Consts/Game.const'
import { SaveGame002 } from '@/GameData/Scenes/Apps/SaveGame/002.scene'
import {
  getNextStoredProfileId,
  writeStoredProfile
} from '@/Systems/Save/Save.storage'

import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'
import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const saveProfile = (profileId?: number): void => {
  try {
    const { profile } = useProfileStore.getState()
    const { setScene } = useSceneStore.getState()

    if (!profile) {
      return
    }

    const targetProfileId = profileId ?? getNextStoredProfileId()
    const updatedProfile: ProfileType = {
      ...profile,
      gameVersion: GAME_VERSION,
      id: targetProfileId,
      lastSave: new Date().toISOString()
    }

    writeStoredProfile(updatedProfile)
    setProfileSession(updatedProfile)
    loadProfiles()
    setScene({ component: SaveGame002 })
  } catch (error) {
    console.warn(`Error saving profile: ${error}`)
  }
}
