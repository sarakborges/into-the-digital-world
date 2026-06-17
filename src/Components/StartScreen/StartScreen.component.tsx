import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language'
import { loadProfiles } from '@/Helpers/Systems/Profile'

import { THEMES } from '@/Consts/Themes.const'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { Text } from '@/DesignSystem/Text'
import { Portrait } from '@/DesignSystem/Portrait'

import { NewGame } from '@/Components/NewGame'
import { GameFile } from '@/Components/GameFile'

import './StartScreen.style.scss'

export const StartScreen = () => {
  const { savedProfiles, setSavedProfiles } = useSavedProfilesStore(
    (state) => state
  )
  const { settings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <main className="start-screen">
      <header>
        <Portrait
          alt={getTexts('START_SCREEN_TITLE')}
          src={`/digivice_backgrounds/${
            settings.theme &&
            Object.keys({
              ...THEMES.default,
              ...THEMES.crests
            }).includes(settings.theme)
              ? settings.theme
              : 'default'
          }.webp`}
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
