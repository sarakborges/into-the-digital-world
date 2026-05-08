import { getTexts } from '@/Helpers/getTexts.helper'

import { useScene } from '@/Hooks/Scene.hook'
import { useProfile } from '@/Hooks/Profile.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

export const AppLogoff = () => {
  const { profile } = useProfile()
  const { scene, setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  if (!profile) {
    return
  }

  const logoff = () => {
    setScene({
      currentScene: 'logoff',
      currentStage: '001'
    })

    setDigivice({ ...digivice, isOpen: false })
  }

  return (
    <Button onClick={logoff} disabled={!!scene}>
      <Portrait alt={getTexts('APPS_LOGOFF')} src="/apps/logoff.png" />
      <Text>{getTexts('APPS_LOGOFF')}</Text>
    </Button>
  )
}
