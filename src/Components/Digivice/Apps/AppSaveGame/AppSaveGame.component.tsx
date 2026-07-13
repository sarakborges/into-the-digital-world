import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language'
import { loadProfiles, saveProfile } from '@/Helpers/Systems/Profile'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Button } from '@/Components/DesignSystem/Button'
import { GameFileSave } from '@/Components/Global/GameFileSave'

import './AppSaveGame.style.scss'

export const AppSaveGame = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <div className="save-game">
      <Button onClick={() => saveProfile()}>
        {getTexts('SAVEGAME_001_NEWGAME')}
      </Button>

      <div className="games-list">
        {savedProfiles?.map((profile) => (
          <GameFileSave profile={profile} key={`savedProfiles-${profile.id}`} />
        ))}
      </div>
    </div>
  )
}
