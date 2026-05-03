import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Button } from '@/Components/System/Button'
import { saveProfile } from '@/Helpers/saveProfile.helper'

export const SaveGame = () => {
  const { profile } = useProfile()
  const { savedProfiles } = useSavedProfiles()

  if (!profile || !savedProfiles) {
    return
  }

  const saveGame = () => {
    try {
      saveProfile({ profile, savedProfiles })
      alert(getTexts('GAME_SAVED'))
    } catch (e) {
      console.warn(e)
    }
  }

  return <Button onClick={saveGame}>{getTexts('SAVE_GAME')}</Button>
}
