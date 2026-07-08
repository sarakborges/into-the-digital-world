import { deleteData, saveData } from '@/Helpers/Systems/Data'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const deleteGame = () => {
  const { savedProfiles, setSavedProfiles } = useSavedProfilesStore.getState()
  const { digivice, setDigivice } = useDigiviceStore.getState()

  if (!digivice?.currentDetails) {
    return
  }

  try {
    deleteData({ key: `profile${digivice.currentDetails}` })

    const updatedProfiles =
      savedProfiles?.filter(
        (profile) => profile.id !== digivice.currentDetails
      ) || null

    setSavedProfiles(updatedProfiles)

    saveData({
      key: 'profiles',
      value: updatedProfiles
        ?.map((profile) => profile.id)
        .filter((profile) => profile !== digivice.currentDetails)
    })

    setDigivice({
      isOpen: false
    })
  } catch (e) {
    console.warn(e)
  }
}
