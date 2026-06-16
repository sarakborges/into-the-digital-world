import { getTexts } from '@/Helpers/Language'
import { deleteData } from '@/Helpers/Systems/Profile'
import { saveData } from '@/Helpers/Systems/Profile'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Button } from '@/Components/System/Button'

export const DeleteGame = ({ profileId }: { profileId: number }) => {
  const { savedProfiles, setSavedProfiles } = useSavedProfilesStore(
    (state) => state
  )

  if (!profileId) {
    return
  }

  const resetGame = () => {
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

  return (
    <Button onClick={resetGame} cancel>
      {getTexts('DELETE_GAME_FILE')}
    </Button>
  )
}
