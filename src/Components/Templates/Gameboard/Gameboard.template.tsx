import { useGame } from '@/Hooks/Game.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'

import './Gameboard.style.scss'

export const GameboardTemplate = () => {
  const { game } = useGame()

  if (!game) {
    return <></>
  }

  return (
    <div className="game-body">
      <div className="main-game">
        <Gameboard />
        <Controller />
      </div>
    </div>
  )
}
