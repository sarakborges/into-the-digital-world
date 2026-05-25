import type { ProfileType } from '@/Types/Profile.type'

import { saveData } from '@/Helpers/saveData.helper'
import { saveSession } from '@/Helpers/saveSession.helper'
import { loadData } from '@/Helpers/loadData.helper'

export const saveProfile = ({ profile }: { profile: ProfileType }) => {
  try {
    const updatedProfile = { ...profile, lastSave: new Date() }
    const savedProfiles = loadData({ key: 'profiles' })

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
        ...savedProfiles?.map((savedProfile) => savedProfile),
        profile.id
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
