import { useEffect } from 'react'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { createNewProfile } from '@/Helpers/Systems/Profile/createNewProfile.helper'
import { loadProfiles } from '@/Helpers/Systems/Profile/loadProfiles.helper'
import { getThemeBackground } from '@/Helpers/Systems/Settings/getThemeBackground.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { GameFile } from '@/Components/Global/GameFile/GameFile.component'
import '@/Components/Main/StartScreen/StartScreen.style.scss'

export const StartScreen = () => {
  const { savedProfiles } = useSavedProfilesStore((state) => state)
  const { settings } = useSettingsStore((state) => state)
  const { profile } = useProfileStore((state) => state)

  useEffect(() => {
    loadProfiles()
  }, [profile])

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
          {!!savedProfiles.length && (
            <Text as="h2">{getTexts('SAVED_GAMES')}</Text>
          )}

          <Button variant="secondary" onClick={createNewProfile}>
            {getTexts('START_NEW_GAME')}
          </Button>

          <div className="games-list">
            {savedProfiles.map((profile) => (
              <GameFile profile={profile} key={`savedProfiles-${profile.id}`} />
            ))}
          </div>
        </div>
      </main>
    </main>
  )
}
