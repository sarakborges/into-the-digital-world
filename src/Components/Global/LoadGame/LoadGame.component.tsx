import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { startGameSession } from '@/Helpers/Systems/Profile/startGameSession.helper'

import { Button } from '@/Components/DesignSystem/Button/Button.component'

export const LoadGame = ({ profileId }: { profileId: number }) => {
  return (
    <Button onClick={() => startGameSession({ profileId })}>
      {getTexts('LOAD_GAME')}
    </Button>
  )
}
