import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Texts'

import { Button } from '@/Components/System/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  const { savedProfiles } = useSavedProfiles()
  const { setProfile } = useProfile()
  const { setScene } = useScene()

  const createNewProfile = () => {
    const sortedProfiles = [...(savedProfiles || [])].sort(
      (a, b) => b.id - a.id
    )

    const newId = (sortedProfiles?.[0]?.id ?? 0) + 1
    const newProfile: ProfileType = {
      id: newId,
      name: '',
      lastSave: ''
    }

    setProfile(newProfile)
    setScene({ currentScene: 'introduction', currentStage: '001' })
  }

  return (
    <div className="new-game">
      <Button onClick={createNewProfile}>{getTexts('START_NEW_GAME')}</Button>
    </div>
  )
}
