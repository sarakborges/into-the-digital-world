import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'
import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { Digivice } from '@/Components/App/Digivice'
import { StartScreen } from '@/Components/App/StartScreen'
import { Battlefield } from '@/Components/App/Battlefield'
import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './Game.style.scss'

export const Game = () => {
  const profile = useProfileStore((state) => state.profile)
  const settings = useSettingsStore((state) => state.settings)
  const battle = useBattleStore((state) => state.battle)

  useEffect(() => {}, [settings])

  return (
    <div className={`game-body theme-${settings?.theme}`}>
      <div className="main-game">
        <header>
          {!!profile && (
            <div className="current-zone">
              <Text>
                {getTexts('CURRENT_ZONE').replaceAll(
                  '[ZONE]',
                  AllZones[profile.currentZone.id][profile.currentZone.map].name
                )}
              </Text>
            </div>
          )}

          <div className="player-actions">
            <Digivice />
            <Settings />
          </div>
        </header>

        {!!battle && <Battlefield />}
        <Gameboard />

        <>
          {!profile && <StartScreen />}

          {!!profile && (
            <>
              {<Scene />}
              <InteractableTiles />

              <div className="screen-footer">
                <div className="player">
                  <PlayerAvatar />
                  <Text>{profile.name}</Text>
                </div>

                <Gamepad />
              </div>
            </>
          )}
        </>
      </div>
    </div>
  )
}
