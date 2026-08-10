import { useEffect } from 'react'

import { loadData, loadGameSession } from '@/Helpers/Systems/Data'
import { getThemeClassName } from '@/Helpers/Systems/Game'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'

import { Battlefield } from '@/Components/Combat/Battlefield'
import { DigiviceContainer } from '@/Components/Digivice/Container'
import { ScreenOrientationWarning } from '@/Components/Global/ScreenOrientationWarning'
import { Dungeon } from '@/Components/Main/Dungeon'
import { Gameboard } from '@/Components/Main/Gameboard'
import { QuestsLogMinimal } from '@/Components/Main/QuestsLogMinimal'
import { Scene } from '@/Components/Main/Scene'
import { StartScreen } from '@/Components/Main/StartScreen'
import { SettingsContainer } from '@/Components/Settings/Container'

import './Game.style.scss'

export const Game = () => {
  const { profile } = useProfileStore((state) => state)
  const { settings, setSettings } = useSettingsStore((state) => state)

  useEffect(() => {
    loadGameSession()
    setSettings({ ...loadData('settings'), isOpen: false })
  }, [])

  if (!settings) {
    return
  }

  return (
    <div className={`game-body theme-${getThemeClassName(settings.theme)}`}>
      <ScreenOrientationWarning />

      <div className="main-game">
        <header>
          <DigiviceContainer />
          <SettingsContainer />
        </header>

        <main>
          <StartScreen />

          <Gameboard />
          <Dungeon />
          <Battlefield />
        </main>

        {!!profile && (
          <aside>
            <QuestsLogMinimal />
          </aside>
        )}

        <Scene />
      </div>
    </div>
  )
}
