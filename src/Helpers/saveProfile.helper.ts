import type { ProfileType } from '@/Types/Profile.type'

import { saveData } from '@/Helpers/saveData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'

export const saveProfile = ({
  profile,
  savedProfiles
}: {
  profile: ProfileType
  savedProfiles: Array<ProfileType>
}) => {
  try {
    const updatedProfile = { ...profile, lastSave: new Date() }

    saveData({
      key: `profile${profile?.id}`,
      value: updatedProfile
    })

    saveSession({
      key: 'profile',
      value: updatedProfile
    })

    const updatedProfiles = Array.from(
      new Set([
        ...(savedProfiles || [])?.map((profile) => profile.id),
        profile?.id
      ])
    )

    saveData({
      key: 'profiles',
      value: updatedProfiles
    })
  } catch (e) {
    console.warn(e)
  }
}
