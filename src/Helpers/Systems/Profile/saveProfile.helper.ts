import { useProfileStore } from '@/Stores/Profile.store'

export const saveProfile = () => {
  try {
    const { profile, setProfile } = useProfileStore.getState()

    const updatedProfile = {
      ...profile,
      lastSave: new Date()
    }

    setProfile(updatedProfile)
  } catch (e) {
    console.warn(e)
  }
}
