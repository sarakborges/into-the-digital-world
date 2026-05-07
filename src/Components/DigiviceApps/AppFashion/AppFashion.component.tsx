import { getTexts } from '@/Helpers/getTexts.helper'

import { useScene } from '@/Hooks/Scene.hook'

import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'

export const AppFashion = () => {
  const { scene, setScene } = useScene()

  const goToCustomization = () => {
    if (
      scene?.currentScene === 'introduction' &&
      scene.currentStage === '023'
    ) {
      setScene({
        currentScene: 'introduction',
        currentStage: '024'
      })

      return
    }

    setScene({
      currentScene: 'avatarCustomization',
      currentStage: '001'
    })
  }

  return (
    <Button
      data-warning={
        scene?.currentScene === 'introduction' && scene.currentStage === '023'
      }
      onClick={goToCustomization}
    >
      <Portrait alt={getTexts('APPS_FASHION')} src="/apps/fashion.png" />
      <Text>{getTexts('APPS_FASHION')}</Text>
    </Button>
  )
}
