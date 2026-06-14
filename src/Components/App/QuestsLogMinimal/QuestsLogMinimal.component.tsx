import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { isQuestDone } from '@/Systems/Quests/isQuestDone.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { QuestsList } from '@/Components/App/QuestsList'

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
