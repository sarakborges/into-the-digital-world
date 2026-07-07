import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language'
import { loadProfiles } from '@/Helpers/Systems/Profile'
import { getThemeBackground } from '@/Helpers/Systems/Settings'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/DesignSystem/Text'
import { Portrait } from '@/Components/DesignSystem/Portrait'

import { NewGame } from '@/Components/Global/NewGame'
import { GameFile } from '@/Components/Global/GameFile'

import './StartScreen.style.scss'

export const StartScreen = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)
  const { settings } = useSettingsStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  useEffect(() => {
    loadProfiles()
  }, [])

  if (!!profile || !settings) {
    return
  }

  return (
    <main className="start-screen">
      <header>
        <Portrait
          alt={getTexts('START_SCREEN_TITLE')}
          src={`/digivice_backgrounds/${getThemeBackground(settings.theme)}.webp`}
        />

        <Text as="p">{getTexts('START_SCREEN_TITLE')}</Text>
      </header>

      <main>
        <div className="saved-games">
          <header>
            <Text as="h2">{getTexts('SAVED_GAMES')}</Text>
            <NewGame />
          </header>

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
      </main>
    </main>
  )
}
