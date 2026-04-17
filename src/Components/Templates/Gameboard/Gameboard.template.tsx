import { useProfile } from '@/Hooks/Profile.hook'

import { Controller } from '@/Components/App/Controller'
import { Gameboard } from '@/Components/App/Gameboard'
import { Dialog } from '@/Components/App/Dialog'

import './Gameboard.style.scss'

export const GameboardTemplate = () => {
  const { profile } = useProfile()

  const dialogOptions = {
    speaker: '???',
    speakerAvatar: 'AGUMON',
    text: `A human child? Don't move! I'll let the others know!\n*runs away*`
  }

  return (
    <div className="game-body">
      <div className="main-game">
        {!!profile && (
          <>
            <Gameboard />
            <Controller />
          </>
        )}

        {!profile && <Dialog {...dialogOptions} />}
      </div>
    </div>
  )
}
