import { getTexts } from '@/Texts'

import { deleteData } from '@/Helpers/deleteData.helper'
import { saveData } from '@/Helpers/saveData.helper'

import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Button } from '@/Components/System/Button'

export const DeleteGame = ({ profileId }: { profileId: number }) => {
  const { savedProfiles, setSavedProfiles } = useSavedProfiles()

  const resetGame = () => {
    if (!confirm('This is irreversible. Are you sure you want to proceed?')) {
      return
    }

    try {
      deleteData({ key: `profile${profileId}` })

      saveData({
        key: 'profiles',
        value: [savedProfiles?.filter((profile) => profile.id !== profileId)]
      })

      setSavedProfiles(
        savedProfiles?.filter((profile) => profile.id !== profileId) || null
      )
    } catch (e) {
      console.log(e)
    }
  }

  return <Button onClick={resetGame}>{getTexts('DELETE_GAME_FILE')}</Button>
}
