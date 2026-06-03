import { getTexts } from '@/Helpers/getTexts.helper'
import { deleteData } from '@/Helpers/deleteData.helper'
import { saveData } from '@/Helpers/saveData.helper'

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
    if (!confirm('This is irreversible. Are you sure you want to proceed?')) {
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
