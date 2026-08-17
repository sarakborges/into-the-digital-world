import { loadData, saveData, saveSession } from '@/Helpers/Systems/Data'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const saveProfile = (profileId?: number) => {
  try {
    const { profile } = useProfileStore.getState()
    const { savedProfiles } = useSavedProfilesStore.getState()
    const { setCurrentScene } = useSceneStore.getState()

    if (!profile) {
      return
    }

    const sortedProfiles = [...(savedProfiles || [])].sort(
      (a, b) => (b?.id || 0) - (a?.id || 0)
    )

    const newId = (sortedProfiles?.[0]?.id ?? 0) + 1

    const updatedProfile = {
      ...profile,
      id: profileId || newId,
      lastSave: new Date()
    }
    const savedProfilesLoaded = loadData('profiles')

    saveData({
      key: `profile${profileId || newId}`,
      value: updatedProfile
    })

    saveSession(updatedProfile)

    const updatedProfiles = Array.from(
      new Set(
        [...(savedProfilesLoaded ?? []), !profileId ? newId : undefined].filter(
          (profile) => !!profile
        )
      )
    )

    saveData({
      key: 'profiles',
      value: updatedProfiles
    })

    setCurrentScene(null)
  } catch (e) {
    console.warn(e)
  }
}
