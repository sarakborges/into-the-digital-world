import { useProfileStore } from '@/Stores/Profile.store'

import { saveData } from '@/Helpers/Systems/Profile'
import { saveSession } from '@/Helpers/Systems/Profile'
import { loadData } from '@/Helpers/Systems/Profile'

export const saveProfile = () => {
  try {
    const { profile } = useProfileStore.getState()

    if (!profile) {
      return
    }

    const updatedProfile = { ...profile, lastSave: new Date() }
    const savedProfiles = loadData({ key: 'profiles' })

    saveData({
      key: `profile${profile.id}`,
      value: updatedProfile
    })

    saveSession(updatedProfile)

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
