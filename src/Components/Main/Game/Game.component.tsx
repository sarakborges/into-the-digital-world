import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { loadData, loadGameSession } from '@/Helpers/Systems/Data'

import { THEMES } from '@/Consts/Themes.const'

import { useSettingsStore } from '@/Stores/Settings.store'

import { Battlefield } from '@/Components/Combat/Battlefield'
import { DigiviceContainer } from '@/Components/Digivice/Container'
import { CurrentParty } from '@/Components/Global/CurrentParty'
import { Dungeon } from '@/Components/Main/Dungeon'
import { Gameboard } from '@/Components/Main/Gameboard'
import { InteractableTiles } from '@/Components/Main/InteractableTiles'
import { QuestsLogMinimal } from '@/Components/Main/QuestsLogMinimal'
import { StartScreen } from '@/Components/Main/StartScreen'
import { SettingsContainer } from '@/Components/Settings/Container'

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
