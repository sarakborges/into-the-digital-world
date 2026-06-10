import { getTexts } from '@/Helpers/getTexts.helper'

import { THEMES } from '@/Consts/Themes.const'

import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

import { NewGame } from '@/Components/App/NewGame'
import { GameFile } from '@/Components/App/GameFile'

import './StartScreen.style.scss'

export const StartScreen = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)
  const { settings } = useSettingsStore((state) => state)

  return (
    <main className="start-screen">
      <header>
        <Portrait
          alt={getTexts('START_SCREEN_TITLE')}
          src={`/digivice_backgrounds/${
            settings?.theme &&
            Object.keys({
              ...THEMES.default,
              ...THEMES.crests
            }).includes(settings?.theme)
              ? settings?.theme
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
