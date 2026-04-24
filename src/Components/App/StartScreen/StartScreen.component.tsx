import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { getTexts } from '@/Texts'

import { Text } from '@/Components/System/Text'

import { NewGame } from '@/Components/App/NewGame'
import { GameFile } from '@/Components/App/GameFile'

import './StartScreen.style.scss'
import { useEffect } from 'react'

export const StartScreen = () => {
  const { savedProfiles, loadProfiles } = useSavedProfiles()

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <main className="start-screen">
      <header>
        <Text>{getTexts('START_SCREEN_TITLE')}</Text>
      </header>

      <main>
        <NewGame />

        <div className="saved-games">
          {savedProfiles?.map((profile) => (
            <GameFile profile={profile} key={`savedProfiles-${profile.id}`} />
          ))}
        </div>
      </main>
    </main>
  )
}
