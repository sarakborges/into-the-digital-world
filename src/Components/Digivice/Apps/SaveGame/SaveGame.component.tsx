import {useEffect} from 'react'

import {getDialogs} from '@/Helpers/Language'
import {loadProfiles, saveProfile} from '@/Helpers/Systems/Profile'

import {useSavedProfilesStore} from '@/Stores/SavedProfiles.store'

import {Button} from '@/Components/DesignSystem/Button'

import {GameFileSave} from '@/Components/Global/GameFileSave'

import './SaveGame.style.scss'

export const SaveGame = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <div className="save-game">
      <Button onClick={() => saveProfile()}>
        {getDialogs('SAVEGAME_001_NEWGAME')}
      </Button>

      <div className="games-list">
        {savedProfiles
          ?.sort((a, b) => (a.lastSave > b.lastSave ? -1 : 1))
          .map((profile) => (
            <GameFileSave
              profile={profile}
              key={`savedProfiles-${profile.id}`}
            />
          ))}
      </div>
    </div>
  )
}
