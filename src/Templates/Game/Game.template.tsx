import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSettingsStore } from '@/Stores/Settings.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useBattleStore } from '@/Stores/Battle.store'

import { Text } from '@/Components/System/Text'

import { InteractableTiles } from '@/Components/App/InteractableTiles'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { Digivice } from '@/Components/App/Digivice'
import { StartScreen } from '@/Components/App/StartScreen'
import { PlayerAvatar } from '@/Components/App/PlayerAvatar'
import { Battlefield } from '@/Components/App/Battlefield'

import './Game.style.scss'
import { CharacterHeader } from '@/Components/App/CharacterHeader'

export const Game = () => {
  const profile = useProfileStore((state) => state.profile)
  const settings = useSettingsStore((state) => state.settings)
  const scene = useSceneStore((state) => state.scene)
  const digivice = useDigiviceStore((state) => state.digivice)
  const battle = useBattleStore((state) => state.battle)

  useEffect(() => {}, [settings])

  return (
    <div className={`game-body theme-${settings?.theme}`}>
      <div className="main-game">
        {!!battle && <Battlefield />}

        <Gameboard />

        {!scene && (
          <>
            {!profile && <StartScreen />}

            {!!profile && (
              <>
                <InteractableTiles />

                <div className="screen-footer">
                  <div className="player">
                    <CharacterHeader
                      character={{ ...profile, isPlayer: true }}
                    />

                    <div className="player-actions">
                      <Digivice />
                      <Settings />
                    </div>
                  </div>

                  <Gamepad />
                </div>
              </>
            )}
          </>
        )}

        {<Scene />}
      </div>
    </div>
  )
}
