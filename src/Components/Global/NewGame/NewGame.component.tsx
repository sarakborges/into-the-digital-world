import { getTexts } from '@/Helpers/Language'
import { createNewProfile } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/DesignSystem/Button'

import './NewGame.style.scss'

export const NewGame = () => {
  return (
    <div className="new-game">
      <Button style="secondary" onClick={createNewProfile}>
        {getTexts('START_NEW_GAME')}
      </Button>
    </div>
  )
}
