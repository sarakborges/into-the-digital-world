import { loadData } from '@/Helpers/Systems/Data'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const loadProfiles = () => {
  const { setSavedProfiles } = useSavedProfilesStore.getState()

  const savedProfiles = loadData({ key: `profiles` })

  if (!savedProfiles) {
    return
  }

  setSavedProfiles(
    savedProfiles?.map((profile) => loadData({ key: `profile${profile}` }))
  )
}
