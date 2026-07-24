import { IntroductionQuest } from '@/GameData/Quests/Introduction.quest'
import { Introduction002 } from '@/GameData/Scenes/Story/Introduction/002.scene'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { addNewQuest } from '@/Helpers/Systems/Quests/addNewQuest.helper'

import { useSceneStore } from '@/Stores/Scene.store'

import { SingleOptionDialog } from '@/Components/DesignSystem/SingleOptionDialog/SingleOptionDialog.component'

export const Introduction001 = () => {
  const { setScene } = useSceneStore((state) => state)

  return (
    <SingleOptionDialog
      optionId="scene-introduction-001-continue"
      text={getTexts('INTRODUCTION_001_TEXT')}
      onAction={() => {
        addNewQuest({ questId: IntroductionQuest.id })
        setScene({ component: Introduction002 })
      }}
    />
  )
}
