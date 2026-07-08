import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { THEMES } from '@/Consts/Themes.const'

import { loadData, loadGameSession } from '@/Helpers/Systems/Data'

import { useSettingsStore } from '@/Stores/Settings.store'

import { InteractableTiles } from '@/Components/Main/InteractableTiles'
import { QuestsLogMinimal } from '@/Components/Main/QuestsLogMinimal'
import { SettingsContainer } from '@/Components/Settings/Container'
import { DigiviceContainer } from '@/Components/Digivice/Container'
import { CurrentParty } from '@/Components/Global/CurrentParty'
import { Battlefield } from '@/Components/Combat/Battlefield'
import { StartScreen } from '@/Components/Main/StartScreen'
import { Gameboard } from '@/Components/Main/Gameboard'
import { Dungeon } from '@/Components/Main/Dungeon'

import './Game.style.scss'

export const Game = () => {
  const { settings, setSettings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  useEffect(() => {
    loadGameSession()
    setSettings({ ...loadData({ key: 'settings' }), isOpen: false })
  }, [])

  return (
    <div
      className={`game-body theme-${
        settings.theme &&
        Object.keys({
          ...THEMES.default,
          ...THEMES.crests,
          ...THEMES.families,
          ...THEMES.other
        }).includes(settings.theme)
          ? settings.theme
          : 'default'
      }`}
    >
      <div className="main-game">
        <div className="game-container">
          <header>
            <DigiviceContainer />
            <SettingsContainer />
          </header>

          <Gameboard />
          <InteractableTiles />
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
