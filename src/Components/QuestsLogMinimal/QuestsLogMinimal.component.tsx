import { getTexts } from '@/Helpers/Language'
import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

import { QuestsList } from '@/Components/QuestsList'

import './QuestsLogMinimal.style.scss'

export const QuestsLogMinimal = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  const notDoneQuests = Object.keys(profile.quests ?? {}).filter(
    (quest) => !isQuestDone(quest)
  )

  if (!notDoneQuests.length) {
    return
  }

  return (
    <div className="quests-log-minimal">
      <QuestsList
        list={notDoneQuests}
        title={getTexts('QUESTS_LOG_TITLE')}
        noListText={getTexts('QUESTS_LOG_NOQUESTS')}
      />
    </div>
  )
}
