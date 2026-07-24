import type { ProfileType } from '@/Types/Profile.type'

import {
  getStoredProfileIds,
  readStoredProfile
} from '@/Systems/Save/Save.storage'

import { getSortedProfiles } from '@/Helpers/Systems/Profile/getSortedProfiles.helper'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const loadProfiles = (): void => {
  const { setSavedProfiles } = useSavedProfilesStore.getState()

  try {
    const profiles = getStoredProfileIds().flatMap<ProfileType>((profileId) => {
      const profile = readStoredProfile(profileId)

      return profile ? [profile] : []
    })

    setSavedProfiles(getSortedProfiles(profiles))
  } catch (error) {
    console.warn(`Error loading save profiles: ${error}`)
    setSavedProfiles([])
  }
}
