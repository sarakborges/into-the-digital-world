import { saveService } from '@/Systems/Save/Save.service'

import type { ProfileType } from '@/Types/Profile.type'

import { SaveGame002 } from '@/GameData/Scenes/Apps/SaveGame/002.scene'

import { saveSession } from '@/Helpers/Systems/Data/saveSession.helper'
import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const saveProfile = async (profileId?: number): Promise<void> => {
  try {
    const { profile } = useProfileStore.getState()
    const { savedProfiles } = useSavedProfilesStore.getState()
    const { setScene } = useSceneStore.getState()

    if (!profile) {
      return
    }

    const highestProfileId = Math.max(
      0,
      ...(savedProfiles ?? []).map((savedProfile) => savedProfile.id)
    )
    const targetProfileId = profileId ?? highestProfileId + 1
    const lastSave = new Date().toISOString()

    const updatedProfile: ProfileType = {
      ...profile,
      id: targetProfileId,
      lastSave
    }

    await saveService.save({
      slotId: String(targetProfileId),
      profile: updatedProfile
    })

    saveSession(updatedProfile)
    await loadProfiles()
    setScene({ component: SaveGame002 })
  } catch (error) {
    console.warn(`Error saving profile: ${error}`)
  }
}
