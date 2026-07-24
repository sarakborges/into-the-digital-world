import type { ProfileType } from '@/Types/Profile.type'

import { ProfileSaveSchema } from '@/Systems/Save/Save.schema'
import { isProfileFromCurrentGameVersion } from '@/Systems/Save/Save.version'

const SAVED_PROFILE_IDS_KEY = 'itdw_saved_profile_ids'
const getSavedProfileKey = (profileId: number): string =>
  `itdw_saved_profile_${profileId}`

const parseStoredJson = (value: string | null): unknown | undefined => {
  if (!value) {
    return undefined
  }

  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

export const getStoredProfileIds = (): number[] => {
  const value = parseStoredJson(localStorage.getItem(SAVED_PROFILE_IDS_KEY))

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

export const getNextStoredProfileId = (): number => {
  return Math.max(0, ...getStoredProfileIds()) + 1
}

export const readStoredProfile = (
  profileId: number
): ProfileType | undefined => {
  const value = parseStoredJson(
    localStorage.getItem(getSavedProfileKey(profileId))
  )

  if (!isProfileFromCurrentGameVersion(value)) {
    return undefined
  }

  const profile = ProfileSaveSchema.safeParse(value)

  return profile.success ? profile.data : undefined
}

export const writeStoredProfile = (profile: ProfileType): void => {
  const validProfile = ProfileSaveSchema.parse(profile)
  const profileIds = getStoredProfileIds()

  localStorage.setItem(
    getSavedProfileKey(validProfile.id),
    JSON.stringify(validProfile)
  )

  if (!profileIds.includes(validProfile.id)) {
    localStorage.setItem(
      SAVED_PROFILE_IDS_KEY,
      JSON.stringify([...profileIds, validProfile.id])
    )
  }
}

export const deleteStoredProfile = (profileId: number): void => {
  const profileIds = getStoredProfileIds().filter(
    (storedProfileId) => storedProfileId !== profileId
  )

  localStorage.removeItem(getSavedProfileKey(profileId))
  localStorage.setItem(SAVED_PROFILE_IDS_KEY, JSON.stringify(profileIds))
}
