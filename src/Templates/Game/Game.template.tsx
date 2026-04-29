import { useEffect } from 'react'

import { Scene } from '@/GameData/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { InteractableNpcs } from '@/Components/App/InteractableNpcs'
import { Gamepad } from '@/Components/App/Gamepad'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { StartScreen } from '@/Components/App/StartScreen'

import './Game.style.scss'

export const Game = () => {
  const { scene } = useScene()
  const { profile } = useProfile()
  const { settings } = useSettings()

  useEffect(() => {}, [settings])

  return (
    <div className="game-body">
      <div className="main-game">
        <Settings />

        {!scene && (
          <>
            {!profile && <StartScreen />}

            {!!profile && (
              <div className="screen-footer">
                <InteractableNpcs />
                <Gamepad />
              </div>
            )}
          </>
        )}

        {!!profile && <Gameboard />}
        {!!scene && <Scene />}
      </div>
    </div>
  )
}
