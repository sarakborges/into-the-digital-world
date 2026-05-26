import { getTexts } from '@/Helpers/getTexts.helper'

import { AllScenes } from '@/GameData/Scenes'

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

  const isFashion = app.id === 'fashion'
  const isSave = app.id === 'save'
  const isLogoff = app.id === 'logoff'
  const isIntroduction = scene?.currentScene === 'introduction'

  const isAppDisabled =
    (!!scene && !!isIntroduction && !isFashion) ||
    (!profile.doneScenes.includes(AllScenes.getStarterDigimon.id) &&
      !(isFashion || isSave || isLogoff))
  const isAppHighlighted = !!isFashion && !!isIntroduction

  const openApp = () => {
    if (!!isFashion && !!isIntroduction) {
      setScene({
        currentScene: 'introduction',
        currentStage: '024'
      })

      setDigivice({ ...digivice, currentApp: app.app })

      return
    }

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
    <Button
      onClick={openApp}
      disabled={!!isAppDisabled}
      data-warning={isAppHighlighted}
    >
      <Portrait
        alt={getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}
        src={`/apps/${app.id}.png`}
      />

      <Text>{getTexts(`APPS_${app.id.toLocaleUpperCase()}`)}</Text>
    </Button>
  )
}
