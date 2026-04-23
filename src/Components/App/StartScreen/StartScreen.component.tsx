import { useSavedProfiles } from '@/Hooks/SavedProfiles.hook'

import { getTexts } from '@/Texts'

import { Text } from '@/Components/System/Text'

import { NewGame } from '@/Components/App/NewGame'
import { LoadGame } from '@/Components/App/LoadGame'
import { DeleteGame } from '@/Components/App/DeleteGame'

import './StartScreen.style.scss'

export const StartScreen = () => {
  const { savedProfiles } = useSavedProfiles()

  return (
    <main className="start-screen">
      <header>
        <Text as="span">{getTexts('START_SCREEN_TITLE')}</Text>
      </header>

      <main>
        <NewGame />

        <div className="saved-games">
          {savedProfiles?.map((profile) => (
            <div key={`savedProfiles-${profile.id}`} className="game-file">
              <header>
                <Text as="span">
                  {getTexts('GAME_FILE_TITLE').replace(`[NAME]`, profile.name)}
                </Text>

                <Text as="span">
                  {getTexts('GAME_FILE_TIME').replace(
                    `[TIME]`,
                    new Date(profile.lastSave).toLocaleString()
                  )}
                </Text>
              </header>

              <div className="game-options">
                <LoadGame profileId={profile.id} />
                <DeleteGame profileId={profile.id} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </main>
  )
}
