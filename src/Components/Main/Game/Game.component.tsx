import { useEffect } from 'react'

import { restoreGameSession } from '@/Helpers/Systems/Data/restoreGameSession.helper'
import { getThemeClassName } from '@/Helpers/Systems/Game/getThemeClassName.helper'
import { loadSettings } from '@/Helpers/Systems/Settings/loadSettings.helper'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Battlefield } from '@/Components/Combat/Battlefield/Battlefield.component'
import { DigiviceContainer } from '@/Components/Digivice/Container/DigiviceContainer.component'
import { CurrentParty } from '@/Components/Global/CurrentParty/CurrentParty.component'
import { Dungeon } from '@/Components/Main/Dungeon/Dungeon.component'
import '@/Components/Main/Game/Game.style.scss'
import { Gameboard } from '@/Components/Main/Gameboard/Gameboard.component'
import { QuestsLogMinimal } from '@/Components/Main/QuestsLogMinimal/QuestsLogMinimal.component'
import { Scene } from '@/Components/Main/Scene/Scene.component'
import { StartScreen } from '@/Components/Main/StartScreen/StartScreen.component'
import { SettingsContainer } from '@/Components/Settings/Container/SettingsContainer.component'

export const Game = () => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  useEffect(() => {
    restoreGameSession()
    setSettings(loadSettings())
  }, [])

  return (
    <div className={`game-body theme-${getThemeClassName(settings.theme)}`}>
      <div className="main-game">
        <div className="game-container">
          <header>
            <DigiviceContainer />
            <SettingsContainer />
          </header>

          <Gameboard />
          <Dungeon />
          <Battlefield />
          <QuestsLogMinimal />
        </div>

        <CurrentParty />
        <StartScreen />
        <Scene />
      </div>
    </div>
  )
}
