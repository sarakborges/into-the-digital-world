import { getTexts } from '@/Helpers/Language'
import { saveData, deleteData } from '@/Helpers/Systems/Profile'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

export const deleteGame = (profileId: number) => {
  const { savedProfiles, setSavedProfiles } = useSavedProfilesStore.getState()

  if (!confirm(getTexts('DELETE_GAME'))) {
    return
  }

  try {
    deleteData({ key: `profile${profileId}` })

    const updatedProfiles =
      savedProfiles?.filter((profile) => profile.id !== profileId) || null

    setSavedProfiles(updatedProfiles)

    saveData({
      key: 'profiles',
      value: updatedProfiles
        ?.map((profile) => profile.id)
        .filter((profile) => profile !== profileId)
    })
  } catch (e) {
    console.warn(e)
  }
}
