import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'
import { saveProfile } from '@/Helpers/Systems/Profile/saveProfile.helper'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import '@/Components/Digivice/Apps/AppSaveGame/AppSaveGame.style.scss'
import { GameFileSave } from '@/Components/Global/GameFileSave/GameFileSave.component'

export const AppSaveGame = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)

  useEffect(() => {
    void loadProfiles()
  }, [])

  return (
    <div className="save-game">
      <Button onClick={() => void saveProfile()}>
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
