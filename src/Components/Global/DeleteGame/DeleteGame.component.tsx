import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { openDeleteGameDialog } from '@/Helpers/Systems/Scenes/openDeleteGameDialog.helper'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const DeleteGame = ({ profileId }: { profileId: number }) => {
  if (!profileId) {
    return
  }

  return (
    <Button onClick={() => openDeleteGameDialog(profileId)} style="cancel">
      {getTexts('DELETE_GAME_FILE')}
    </Button>
  )
}
