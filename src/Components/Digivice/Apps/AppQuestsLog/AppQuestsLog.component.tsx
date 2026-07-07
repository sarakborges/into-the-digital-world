import { getTexts } from '@/Helpers/Language'
import { getQuestGroups } from '@/Helpers/Systems/Quests'

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
        title={getTexts('QUESTS_LOG_TITLE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS')}
      />

      <QuestsList
        list={done}
        title={getTexts('QUESTS_LOG_TITLE_DONE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS_DONE')}
      />
    </div>
  )
}
