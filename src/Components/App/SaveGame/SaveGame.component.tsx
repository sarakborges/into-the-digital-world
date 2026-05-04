import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { Button } from '@/Components/System/Button'
import { saveProfile } from '@/Helpers/saveProfile.helper'
import { useScene } from '@/Hooks/Scene.hook'

export const SaveGame = () => {
  const { profile } = useProfile()
  const { scene } = useScene()
  const { savedProfiles } = useSavedProfiles()

  if (!profile) {
    return
  }

  const saveGame = () => {
    try {
      saveProfile({ profile, savedProfiles: savedProfiles || [] })
      alert(getTexts('GAME_SAVED'))
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <Button onClick={saveGame} disabled={!!scene || !!profile.currentScene}>
      {getTexts('SAVE_GAME')}
    </Button>
  )
}
