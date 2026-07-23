import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getQuestGroups } from '@/Helpers/Systems/Quests/getQuestGroups.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import '@/Components/Digivice/Apps/AppQuestsLog/AppQuestsLog.style.scss'
import { QuestsList } from '@/Components/Global/QuestsList/QuestsList.component'

export const AppQuestsLog = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const { notDone, done } = getQuestGroups()

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
