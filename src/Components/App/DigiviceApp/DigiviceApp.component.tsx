import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'
import { useScene } from '@/Hooks/Scene.hook'
import { useDigivice } from '@/Hooks/Digivice.hook'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

export const DigiviceApp = ({ app }) => {
  const { profile } = useProfile()
  const { scene, setScene } = useScene()
  const { digivice, setDigivice } = useDigivice()

  if (!profile) {
    return
  }

  const openApp = () => {
    setScene({
      currentScene: app.scene,
      currentStage: '001'
    })

    setDigivice({ ...digivice, isOpen: false })
  }

  return (
    <Button onClick={openApp} disabled={!!scene}>
      <Portrait
        alt={getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}
        src={`/apps/${app.id}.png`}
      />
      <Text>{getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}</Text>
    </Button>
  )
}
