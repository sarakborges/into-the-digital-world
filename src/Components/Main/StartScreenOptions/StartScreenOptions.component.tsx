import { Settings } from '@/GameData/Scenes/Settings'

import { getTexts } from '@/Helpers/Language'
import { createNewProfile } from '@/Helpers/Systems/Profile'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { useGameStore } from '@/Stores/Game.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'
import { Text } from '@/Components/DesignSystem/Text'

import './StartScreenOptions.style.scss'

export const StartScreenOptions = () => {
  const { game, setGame } = useGameStore((state) => state)

  const openSavedGames = () => {
    setGame({ ...game, isShowingSavedGames: true })
  }

  const buttons = [
    {
      text: getTexts('START_NEW_GAME'),
      onClick: createNewProfile
    },

    {
      text: getTexts('DISPLAY_SAVED_GAMES'),
      onClick: openSavedGames
    },

    {
      text: getTexts('SETTINGS_TITLE'),
      onClick: () => changeScene(Settings)
    }
  ]

  return (
    <div className="start-screen-options">
      {buttons.map((button) => (
        <ShadowButton
          key={`start-screen-button-${button.text}`}
          onClick={button.onClick}
        >
          <Text>{button.text}</Text>
        </ShadowButton>
      ))}
    </div>
  )
}
