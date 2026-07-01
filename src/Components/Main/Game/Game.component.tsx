import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { THEMES } from '@/Consts/Themes.const'

import { loadData, loadSession } from '@/Helpers/Systems/Data'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { InteractableTiles } from '@/Components/Main/InteractableTiles'
import { Gameboard } from '@/Components/Main/Gameboard'
import { SettingsContainer } from '@/Components/Settings/Container'
import { DigiviceContainer } from '@/Components/Digivice/Container'
import { StartScreen } from '@/Components/Main/StartScreen'
import { QuestsLogMinimal } from '@/Components/Main/QuestsLogMinimal'
import { CurrentParty } from '@/Components/Global/CurrentParty'
import { Battlefield } from '@/Components/Combat/Battlefield'
import { Dungeon } from '@/Components/Combat/Dungeon'

import './Game.style.scss'

export const Game = () => {
  const { setProfile } = useProfileStore((state) => state)
  const { settings, setSettings } = useSettingsStore((state) => state)

  if (!settings) {
    return
  }

  useEffect(() => {
    setProfile(loadSession({ key: 'profile' }))
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
          <Battlefield />
          <Dungeon />
          <QuestsLogMinimal />
        </div>

        <CurrentParty />
        <StartScreen />
        <Scene />
      </div>
    </div>
  )
}
