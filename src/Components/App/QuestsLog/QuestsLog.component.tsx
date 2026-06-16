import { getTexts } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { QuestsList } from '@/Components/App/QuestsList'

import './QuestsLog.style.scss'

export const QuestsLog = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const notDoneQuests = Object.keys(profile.quests ?? {}).filter(
    (quest) => !isQuestDone(quest)
  )

  const doneQuests = Object.keys(profile.quests ?? {}).filter(
    (quest) => !!isQuestDone(quest)
  )

  return (
    <div className="quests-log">
      <QuestsList
        list={notDoneQuests}
        title={getTexts('QUESTS_LOG_TITLE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS')}
      />

      <QuestsList
        list={doneQuests}
        title={getTexts('QUESTS_LOG_TITLE_DONE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS_DONE')}
      />
    </div>
  )
}
