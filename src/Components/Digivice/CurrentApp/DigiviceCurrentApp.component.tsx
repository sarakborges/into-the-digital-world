import type { DigiviceAppDefinition } from '@/GameData/Registries/DigiviceApp.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getAppAvailability } from '@/Helpers/Systems/Digivice/getAppAvailability.helper'
import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'

import { useDigiviceStore } from '@/Stores/Digivice.store'
import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

type DigiviceCurrentAppProps = {
  app: DigiviceAppDefinition
}

export const DigiviceCurrentApp = ({ app }: DigiviceCurrentAppProps) => {
  const { profile } = useProfileStore((state) => state)
  const { setScene } = useSceneStore((state) => state)
  const { digivice } = useDigiviceStore((state) => state)

  if (!profile || !digivice) {
    return
  }

  const openApp = () => {
    if (app.app) {
      updateDigivice({ currentApp: app.app })
    }

    if (!app.scene) {
      return
    }

    setScene(app.scene)
  }

  return (
    <Button onClick={openApp} disabled={!getAppAvailability(app.id)}>
      <Portrait
        alt={getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}
        src={`/apps/${app.id}.png`}
      />

      <Text>{getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}</Text>
    </Button>
  )
}
