import {useEffect} from 'react'

import {Scene} from '@/GameData/Scenes'

import {THEMES} from '@/Consts/Themes.const'

import {loadData, loadSession} from '@/Helpers/Systems/Data'

import {useProfileStore} from '@/Stores/Profile.store'
import {useSettingsStore} from '@/Stores/Settings.store'
import {useBattleStore} from '@/Stores/Battle.store'
import {useSceneStore} from '@/Stores/Scene.store'

import {InteractableTiles} from '@/Components/Main/InteractableTiles'
import {Gameboard} from '@/Components/Main/Gameboard'
import {SettingsContainer} from '@/Components/Settings/Container'
import {DigiviceContainer} from '@/Components/Digivice/Container'
import {StartScreen} from '@/Components/Main/StartScreen'
import {QuestsLogMinimal} from '@/Components/Main/QuestsLogMinimal'
import {CurrentParty} from '@/Components/Global/CurrentParty'

import './Game.style.scss'

export const Game = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { settings, setSettings } = useSettingsStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

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

          {!scene && <QuestsLogMinimal />}
        </div>

        {!!profile && (
          <div className="screen-footer">{!battle && <CurrentParty />}</div>
        )}

        {!profile && <StartScreen />}

        <Scene />
      </div>
    </div>
  )
}
