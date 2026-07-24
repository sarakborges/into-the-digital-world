import { deleteStoredProfile } from '@/Systems/Save/Save.storage'

import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

export const deleteGame = (): void => {
  const { digivice, setDigivice } = useDigiviceStore.getState()
  const profileId = Number(digivice?.currentDetails)

  if (!Number.isInteger(profileId) || profileId <= 0) {
    return
  }

  try {
    deleteStoredProfile(profileId)
    loadProfiles()

    setDigivice({
      isOpen: false
    })
  } catch (error) {
    console.warn(`Error deleting save: ${error}`)
  }
}
