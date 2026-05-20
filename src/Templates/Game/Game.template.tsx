import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

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

export const Game = () => {
  const { scene } = useScene()
  const { profile } = useProfile()
  const { settings } = useSettings()
  const { digivice } = useDigivice()

  useEffect(() => {}, [settings])

  return (
    <div className="game-body">
      <div className="main-game">
        <header className="game-header">
          <div className="player">
            {!settings.isOpen && (
              <>
                {!!profile && <PlayerAvatar />}
                <Text>{profile?.name}</Text>
              </>
            )}
          </div>

          <div className="game-header-actions">
            <Digivice />
            <Settings />
          </div>
        </header>

        {!!profile?.currentlyInBattle && <Battlefield />}

        {!profile?.currentlyInBattle && (
          <>
            {!scene && (
              <>
                {!profile && <StartScreen />}

                {!!profile && !digivice.isOpen && (
                  <div className="screen-footer">
                    <InteractableTiles />
                    <Gamepad />
                  </div>
                )}
              </>
            )}

            {<Gameboard />}
          </>
        )}

        {<Scene />}
      </div>
    </div>
  )
}
