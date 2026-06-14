import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { isQuestDone } from '@/Systems/Quests/isQuestDone.helper'

import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'
import { useDigiviceStore } from '@/Stores/Digivice.store'

import { Button } from '@/Components/System/Button'
import { Text } from '@/Components/System/Text'
import { Portrait } from '@/Components/System/Portrait'

export const DigiviceApp = ({ app }) => {
  const { profile } = useProfileStore((state) => state)
  const { scene, setScene } = useSceneStore((state) => state)
  const { digivice, setDigivice } = useDigiviceStore((state) => state)

  if (!profile) {
    return
  }

  const isSave = app.id === 'save'
  const isLogoff = app.id === 'logoff'

  const doneQuests = Object.keys(profile.quests).filter((quest) =>
    isQuestDone(quest)
  )

  const isAppDisabled =
    !!scene ||
    (!doneQuests.includes(AllQuests.starterDigimon.id) &&
      !(!!isSave || !!isLogoff))

  const openApp = () => {
    setDigivice({ ...digivice!, currentApp: app.app })

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
