import { useScene } from '@/Hooks/Scene.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'

import { Scenes } from '@/Scenes'

import './Game.style.scss'

export const Game = () => {
  const { scene } = useScene()

  return (
    <div className="game-body">
      <div className="main-game">
        {
          Scenes[scene?.currentScene || 'introduction'][
            scene?.currentStage || '001'
          ]
        }

        <Gameboard />
        <Controller />
      </div>
    </div>
  )
}
