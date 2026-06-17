import { getTexts } from '@/Helpers/Language'
import { deleteGame } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/System/Button'

export const DeleteGame = ({ profileId }: { profileId: number }) => {
  if (!profileId) {
    return
  }

  const resetGame = () => {
    deleteGame(profileId)
  }

  return (
    <Button onClick={resetGame} cancel>
      {getTexts('DELETE_GAME_FILE')}
    </Button>
  )
}
