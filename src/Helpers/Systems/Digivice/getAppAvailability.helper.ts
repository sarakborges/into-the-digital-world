import { AllQuests } from '@/GameData/Quests'

import { isQuestDone } from '@/Helpers/Systems/Quests'

export const getAppAvailability = ({
  appId,
  profileQuests
}: {
  appId: string
  profileQuests: Record<string, unknown>
}) => {
  const doneQuests = Object.keys(profileQuests).filter((quest) =>
    isQuestDone(quest)
  )

  return {
    isSave: appId === 'save',
    isLogoff: appId === 'logoff',
    isMap: appId === 'map',
    isAppDisabled:
      !doneQuests.includes(AllQuests.starterDigimon.id) &&
      !(appId === 'save' || appId === 'logoff' || appId === 'map')
  }
}
