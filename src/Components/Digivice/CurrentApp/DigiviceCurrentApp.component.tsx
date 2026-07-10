import { getTranslation } from '@/Helpers/Language'
import { getAppAvailability } from '@/Helpers/Systems/Digivice'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

type DigiviceCurrentAppProps = {
  app: {
    id: string
    app?: string
    scene?: string
  }
}

export const DigiviceCurrentApp = ({ app }: DigiviceCurrentAppProps) => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const openApp = () => {
    setDigivice({ ...digivice, currentApp: app.app })

    if (!app.scene) {
      return
    }

    setScene({
      currentScene: app.scene,
      currentStage: '001'
    })
  }

  return (
    <Button onClick={openApp} disabled={!getAppAvailability(app.id)}>
      <Portrait
        alt={getTranslation(`APPS_${app.id.toLocaleUpperCase()}`)}
        src={`/apps/${app.id}.png`}
      />

      <Text>{getTranslation(`APPS_${app.id.toLocaleUpperCase()}`)}</Text>
    </Button>
  )
}
