import { deleteData, loadData } from '@/Helpers/Systems/Data'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const deleteProfile = (profileId: number) => {
  const { setSavedProfiles } = useSavedProfilesStore.getState()

  const savedProfiles = loadData(`profiles`)

  if (!savedProfiles) {
    return
  }

  const updatedProfiles = savedProfiles.filter(
    (profile) => profile.id !== profileId
  )

  setSavedProfiles(updatedProfiles)

  deleteData(`profile${profileId}`)
}
