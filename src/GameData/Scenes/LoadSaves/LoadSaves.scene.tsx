import { getTexts } from '@/Helpers/Language'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { useGameStore } from '@/Stores/Game.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'
import { Text } from '@/Components/DesignSystem/Text'
import { StartScreenSavedGames } from '@/Components/Main/StartScreenSavedGames'

import './LoadSaves.style.scss'

export const LoadSaves = () => {
  const { profile } = useProfileStore((state) => state)
  const { game } = useGameStore((state) => state)

  if (!!game?.hasGameStarted && !!profile) {
    return
  }

  const returnToStartScreen = () => {
    changeScene('startScreen')
  }

  return (
    <main className="load-saves">
      <main>
        <header>
          <Text>{getTexts('LOAD_SAVES_TITLE')}</Text>
        </header>

        <StartScreenSavedGames />

        <footer>
          <ShadowButton onClick={returnToStartScreen}>
            {getTexts('RETURN_TO_START_SCREEN')}
          </ShadowButton>
        </footer>
      </main>
    </main>
  )
}
