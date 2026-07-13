import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language'
import {
  createNewProfile,
  getSortedProfiles,
  loadProfiles
} from '@/Helpers/Systems/Profile'
import { getThemeBackground } from '@/Helpers/Systems/Settings'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
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
          src={`/digivice_backgrounds/${getThemeBackground()}.webp`}
        />

        <Text as="p">{getTexts('START_SCREEN_TITLE')}</Text>
      </header>

      <main>
        <div className="saved-games">
          {!!savedProfiles?.length && (
            <Text as="h2">{getTexts('SAVED_GAMES')}</Text>
          )}

          <Button style="secondary" onClick={createNewProfile}>
            {getTexts('START_NEW_GAME')}
          </Button>

          <div className="games-list">
            {getSortedProfiles(savedProfiles || []).map((profile) => (
              <GameFile profile={profile} key={`savedProfiles-${profile.id}`} />
            ))}
          </div>
        </div>
      </main>
    </main>
  )
}
