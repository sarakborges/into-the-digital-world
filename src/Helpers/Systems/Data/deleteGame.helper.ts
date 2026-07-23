import { saveService } from '@/Systems/Save/Save.service'

import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'

export const deleteGame = async (): Promise<void> => {
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice?.currentDetails) {
    return
  }

  try {
    await saveService.delete(String(digivice.currentDetails))
    await loadProfiles()

    setDigivice({
      isOpen: false
    })
  } catch (error) {
    console.warn(`Error deleting save: ${error}`)
  }
}
