import { getTexts } from '@/Helpers/Language'
import { getQuestGroups } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { QuestsList } from '@/Components/Global/QuestsList'

import './QuestsLogMinimal.style.scss'

export const QuestsLogMinimal = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile || (!!scene && !scene?.enablesMovement)) {
    return
  }

  const { notDone } = getQuestGroups()

  return (
    <div className="quests-log-minimal">
      <QuestsList
        list={notDone}
        title={getTexts('QUESTS_LOG_TITLE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS')}
      />
    </div>
  )
}
