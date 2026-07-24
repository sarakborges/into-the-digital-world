import type { ProfileType } from '@/Types/Profile.type'

import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'
import { isProfileFromCurrentGameVersion } from '@/Systems/Save/Save.version'
import {
  readLocalStorageJson,
  removeLocalStorageValue,
  writeLocalStorageJson
} from '@/Systems/Storage/BrowserStorage'

import {
  getSavedProfileStorageKey,
  SAVED_PROFILE_IDS_STORAGE_KEY
} from '@/Consts/Storage.const'

export const getStoredProfileIds = (): number[] => {
  const value = readLocalStorageJson(SAVED_PROFILE_IDS_STORAGE_KEY)

  if (!Array.isArray(value)) {
    return []
  }

  return Array.from(
    new Set(
      value.filter(
        (profileId): profileId is number =>
          typeof profileId === 'number' &&
          Number.isInteger(profileId) &&
          profileId > 0
      )
    )
  )
}

export const getNextStoredProfileId = (): number =>
  Math.max(0, ...getStoredProfileIds()) + 1

export const readStoredProfile = (
  profileId: number
): ProfileType | undefined => {
  const value = readLocalStorageJson(getSavedProfileStorageKey(profileId))

  if (!isProfileFromCurrentGameVersion(value)) {
    return
  }

  const profile = ProfileSaveSchema.safeParse(value)

  return profile.success ? profile.data : undefined
}

export const writeStoredProfile = (profile: ProfileType): void => {
  const validProfile = ProfileSaveSchema.parse(profile)
  const profileIds = getStoredProfileIds()
  const profileStorageKey = getSavedProfileStorageKey(validProfile.id)
  const isNewProfile = !profileIds.includes(validProfile.id)

  writeLocalStorageJson({ key: profileStorageKey, value: validProfile })

  if (!isNewProfile) {
    return
  }

  try {
    writeLocalStorageJson({
      key: SAVED_PROFILE_IDS_STORAGE_KEY,
      value: [...profileIds, validProfile.id]
    })
  } catch (error) {
    try {
      removeLocalStorageValue(profileStorageKey)
    } catch (rollbackError) {
      console.warn(`Error rolling back profile save: ${rollbackError}`)
    }

    throw error
  }
}

export const deleteStoredProfile = (profileId: number): void => {
  const profileIds = getStoredProfileIds()
  const hasStoredProfileId = profileIds.includes(profileId)
  const updatedProfileIds = profileIds.filter(
    (storedProfileId) => storedProfileId !== profileId
  )

  if (hasStoredProfileId) {
    writeLocalStorageJson({
      key: SAVED_PROFILE_IDS_STORAGE_KEY,
      value: updatedProfileIds
    })
  }

  try {
    removeLocalStorageValue(getSavedProfileStorageKey(profileId))
  } catch (error) {
    if (hasStoredProfileId) {
      try {
        writeLocalStorageJson({
          key: SAVED_PROFILE_IDS_STORAGE_KEY,
          value: profileIds
        })
      } catch (rollbackError) {
        console.warn(`Error rolling back profile deletion: ${rollbackError}`)
      }
    }

    throw error
  }
}
