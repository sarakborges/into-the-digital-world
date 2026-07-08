import { useEffect } from 'react'

import { getTranslation } from '@/Helpers/Language'
import {
  getSavedProfiles,
  loadProfiles,
  saveProfile
} from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/DesignSystem/Button'
import { GameFileSave } from '@/Components/Global/GameFileSave'

import './AppSaveGame.style.scss'

export const AppSaveGame = () => {
  useEffect(() => {
    loadProfiles()
  }, [])

  const sortedSavedProfiles = getSavedProfiles()

  return (
    <div className="save-game">
      <Button onClick={() => saveProfile()}>
        {getTranslation('SAVEGAME_001_NEWGAME')}
      </Button>

      <div className="games-list">
        {sortedSavedProfiles.map((profile) => (
          <GameFileSave profile={profile} key={`savedProfiles-${profile.id}`} />
        ))}
      </div>
    </div>
  )
}
