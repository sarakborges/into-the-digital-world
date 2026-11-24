import { loadData, saveData } from '@/Helpers/Systems/Data'

import { useProfileStore } from '@/Stores/Profile.store'

export const saveGame = () => {
  try {
    const { profile, setProfile } = useProfileStore.getState()

    const updatedProfile = {
      ...profile,
      lastSave: new Date()
    }

    setProfile(updatedProfile)

    const updatedProfiles = Array.from(
      new Set([...(loadData('profiles') ?? []), profile.id])
    )

    saveData({
      key: `profile${profile.id}`,
      value: updatedProfile
    })

    saveData({
      key: 'profiles',
      value: updatedProfiles
    })
  } catch (e) {
    console.warn(e)
  }
}
