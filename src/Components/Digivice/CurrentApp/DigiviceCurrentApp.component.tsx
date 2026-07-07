import { getTexts } from '@/Helpers/Language'
import { getAppAvailability } from '@/Helpers/Systems/Digivice'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { Portrait } from '@/Components/DesignSystem/Portrait'

type DigiviceCurrentAppProps = {
  app: {
    id: string
    app?: string
    scene?: string
  }
}

export const DigiviceCurrentApp = ({ app }: DigiviceCurrentAppProps) => {
  const { profile } = useProfileStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const { isAppDisabled } = getAppAvailability({
    appId: app.id,
    profileQuests: profile.quests
  })

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
    <Button onClick={openApp} disabled={!!isAppDisabled}>
      <Portrait
        alt={getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}
        src={`/apps/${app.id}.png`}
      />

      <Text>{getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}</Text>
    </Button>
  )
}
