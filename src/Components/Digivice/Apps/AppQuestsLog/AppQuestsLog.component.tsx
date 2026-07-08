import { getQuestGroups } from '@/Helpers/Systems/Quests'
import { getTranslation } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { QuestsList } from '@/Components/Global/QuestsList'

import './AppQuestsLog.style.scss'

export const AppQuestsLog = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const { notDone, done } = getQuestGroups(profile)

  return (
    <div className="quests-log">
      <QuestsList
        list={notDone}
        title={getTranslation('QUESTS_LOG_TITLE')}
        noListText={getTranslation('QUESTS_LOG_NOQUESTS')}
      />

      <QuestsList
        list={done}
        title={getTranslation('QUESTS_LOG_TITLE_DONE')}
        noListText={getTranslation('QUESTS_LOG_NOQUESTS_DONE')}
      />
    </div>
  )
}
