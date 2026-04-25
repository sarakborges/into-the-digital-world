import { useEffect } from 'react'

import { Scene } from '@/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useSettings } from '@/Hooks/Settings.hook'

import { Controller } from '@/Components/App/Controller'
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
            {!!profile && <Controller />}
          </>
        )}

        {!!profile && <Gameboard />}
        {!!scene && <Scene />}
      </div>
    </div>
  )
}
