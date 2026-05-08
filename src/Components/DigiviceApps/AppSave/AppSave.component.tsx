import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

export const AppSave = () => {
  const { profile } = useProfile()
  const { scene, setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  if (!profile) {
    return
  }

  const saveGame = () => {
    setScene({
      currentScene: 'saveGame',
      currentStage: '001'
    })

    setDigivice({ ...digivice, isOpen: false })
  }

  return (
    <Button onClick={saveGame} disabled={!!scene}>
      <Portrait alt={getTexts('APPS_SAVE')} src="/apps/save.png" />
      <Text>{getTexts('APPS_SAVE')}</Text>
    </Button>
  )
}
