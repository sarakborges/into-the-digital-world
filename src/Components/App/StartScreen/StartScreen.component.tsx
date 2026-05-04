import { useEffect } from 'react'

import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { getTexts } from '@/Helpers/getTexts.helper'
import { loadData } from '@/Helpers/loadData.helper'

import { Text } from '@/Components/System/Text'

import { NewGame } from '@/Components/App/NewGame'
import { GameFile } from '@/Components/App/GameFile'

import './StartScreen.style.scss'

export const StartScreen = () => {
  const profiles = loadData({ key: 'profiles' }) || null

  const { savedProfiles, setSavedProfiles } = useSavedProfiles()

  const loadProfiles = () => {
    setSavedProfiles(
      profiles
        ?.map((profile) => loadData({ key: `profile${profile}` }))
        .filter((profile) => !!profile)
    )
  }

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

        {!!savedProfiles?.length && (
          <div className="saved-games">
            <Text as="h2">{getTexts('SAVED_GAMES')}</Text>

            <div className="games-list">
              {savedProfiles
                ?.sort((a, b) => (a.lastSave > b.lastSave ? -1 : 1))
                .map((profile) => (
                  <GameFile
                    profile={profile}
                    key={`savedProfiles-${profile.id}`}
                  />
                ))}
            </div>
          </div>
        )}
      </main>
    </main>
  )
}
