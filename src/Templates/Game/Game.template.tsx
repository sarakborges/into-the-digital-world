import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'
import { AllZones } from '@/GameData/Zones'

import { THEMES } from '@/Consts/Themes.const'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { loadData } from '@/Systems/Profile/loadData.helper'
import { loadSession } from '@/Systems/Profile/loadSession.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useBattleStore } from '@/Stores/Battle.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Text } from '@/Components/System/Text'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { Digivice } from '@/Components/App/Digivice'
import { StartScreen } from '@/Components/App/StartScreen'
import { QuestsLogMinimal } from '@/Components/App/QuestsLogMinimal'
import { CurrentParty } from '@/Components/App/CurrentParty'
import { Minimap } from '@/Components/App/Minimap'

import './Game.style.scss'

export const Game = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { settings, setSettings } = useSettingsStore((state) => state)
  const { battle } = useBattleStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  useEffect(() => {
    setProfile(loadSession({ key: 'profile' }))
    setSettings({ ...loadData({ key: 'settings' }), isOpen: false })
  }, [])

  return (
    <div
      className={`game-body theme-${
        settings?.theme &&
        Object.keys({
          ...THEMES.default,
          ...THEMES.crests,
          ...THEMES.families,
          ...THEMES.other
        }).includes(settings?.theme)
          ? settings?.theme
          : 'default'
      }`}
    >
      <div className="main-game">
        <div className="game-container">
          <header>
            <div className="player-actions">
              <Digivice />
              <Settings />
            </div>

            {!!profile && (
              <div className="current-zone">
                <Text>
                  {getTexts('CURRENT_ZONE')
                    .replaceAll('[ZONE]', AllZones[profile.currentZone.id].name)
                    .replaceAll(
                      '[MAP]',
                      AllZones[profile.currentZone.id][profile.currentZone.map]
                        .name
                    )}
                </Text>
              </div>
            )}
          </header>

          <Gameboard />
          <InteractableTiles />
          <QuestsLogMinimal />
        </div>

        {!!profile && (
          <>
            <Scene />

            <div className="screen-footer">
              {!battle && <CurrentParty />}

              {!scene && (
                <div className="footer-widgets">
                  <Minimap />
                  <Gamepad />
                </div>
              )}
            </div>
          </>
        )}

        {!profile && <StartScreen />}
      </div>
    </div>
  )
}
