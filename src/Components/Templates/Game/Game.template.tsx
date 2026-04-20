import { useGame } from '@/Hooks/Game.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'

import { GameStart } from '@/Components/Scenes/GameStart'
import { Introduction } from '@/Components/Scenes/Introduction'

import './Game.style.scss'

export const Game = () => {
  const { game } = useGame()

  const Scenes = {
    gameStart: <GameStart />,
    introduction: <Introduction />
  }

  return (
    <div className="game-body">
      <div className="main-game">
        {Scenes[game?.currentScene || 'gameStart']}

        <Gameboard />
        <Controller />
      </div>
    </div>
  )
}
