import { Scenes } from '@/Scenes'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'
import { Settings } from '@/Components/App/Settings'
import { StartScreen } from '@/Components/App/StartScreen'

import './Game.style.scss'

export const Game = () => {
  const { scene } = useScene()
  const { profile } = useProfile()

  return (
    <div className="game-body">
      <div className="main-game">
        <Settings />
        {!profile && <StartScreen />}

        {!!profile && (
          <>
            <Gameboard />
            <Controller />
          </>
        )}

        {!!scene?.currentScene && (
          <>{Scenes[scene?.currentScene][scene?.currentStage || '001']}</>
        )}
      </div>
    </div>
  )
}
