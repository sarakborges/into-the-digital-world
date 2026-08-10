import { getTexts } from '@/Helpers/Language'
import { openDeleteGameDialog } from '@/Helpers/Systems/Scenes'

import { Button } from '@/Components/DesignSystem/Button'

export const DeleteGame = ({ profileId }: { profileId: number }) => {
  if (!profileId) {
    return
  }

  return (
    <Button onClick={() => openDeleteGameDialog(profileId)} variant="cancel">
      {getTexts('DELETE_GAME_FILE')}
    </Button>
  )
}
