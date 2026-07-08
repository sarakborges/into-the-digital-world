import { getQuestGroups } from '@/Helpers/Systems/Quests'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

import { QuestsList } from '@/Components/Global/QuestsList'

import './QuestsLogMinimal.style.scss'

export const QuestsLogMinimal = () => {
  const { profile } = useProfileStore((state) => state)
  const { scene } = useSceneStore((state) => state)

  if (!profile || !!scene) {
    return
  }

  const { notDone } = getQuestGroups(profile)

  return (
    <div className="quests-log-minimal">
      <QuestsList
        list={notDone}
        title={getTranslation('QUESTS_LOG_TITLE')}
        noListText={getTranslation('QUESTS_LOG_NOQUESTS')}
      />
    </div>
  )
}
