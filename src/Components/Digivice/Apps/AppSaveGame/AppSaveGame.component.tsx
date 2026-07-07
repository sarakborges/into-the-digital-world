import { useEffect } from 'react'

import { getDialogs } from '@/Helpers/Language'
import { getSavedProfiles } from '@/Helpers/Systems/Digivice'
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

  const sortedSavedProfiles = getSavedProfiles(savedProfiles)

  return (
    <div className="save-game">
      <Button onClick={() => saveProfile()}>
        {getDialogs('SAVEGAME_001_NEWGAME')}
      </Button>

      <div className="games-list">
        {sortedSavedProfiles.map((profile) => (
          <GameFileSave profile={profile} key={`savedProfiles-${profile.id}`} />
        ))}
      </div>
    </div>
  )
}
