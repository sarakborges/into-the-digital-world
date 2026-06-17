import { getTexts } from '@/Helpers/Language'
import { deleteGame } from '@/Helpers/Systems/Data'

import { Button } from '@/DesignSystem/Button'

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
