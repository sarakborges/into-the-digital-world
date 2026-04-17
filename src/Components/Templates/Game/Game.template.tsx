import { useProfile } from '@/Hooks/Profile.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'

import { GameStart } from '@/Components/Scenes/GameStart'
import { Scene01 } from '@/Components/Scenes/Scene01'

import './Game.style.scss'

export const Game = () => {
  const { profile } = useProfile()

  return (
    <div className="game-body">
      <div className="main-game">
        {!!profile && (
          <>
            <Scene01 />

            <Gameboard />
            <Controller />
          </>
        )}

        {!profile && <GameStart />}
      </div>
    </div>
  )
}
