import { AllQuests } from '@/GameData/Quests'

import { useProfileStore } from '@/Stores/Profile.store'

export const getAppAvailability = (
  appId: string
): {
  isSave: boolean
  isLogoff: boolean
  isMap: boolean
  isAppDisabled: boolean
} => {
  const profile = useProfileStore.getState().profile

  const profileQuests = profile?.quests || {}
  const doneQuests = Object.keys(profileQuests).filter((quest) =>
    isQuestDone(quest)
  )

  return {
    isSave: appId === 'save',
    isLogoff: appId === 'logoff',
    isMap: appId === 'map',
    isAppDisabled:
      !doneQuests.includes(AllQuests.starterDigimon?.id ?? '') &&
      !(appId === 'save' || appId === 'logoff' || appId === 'map')
  }
}

const isQuestDone = (questId: string): boolean => {
  const profile = useProfileStore.getState().profile

  if (!profile) {
    return false
  }

  const quest = profile.quests[questId]
  if (!quest) {
    return false
  }

  return Object.keys(AllQuests[questId]?.objectives ?? {}).every(
    (objective) => {
      if (AllQuests[questId].objectives[objective].type === 'interact') {
        return !!quest.objectives[objective]
      }

      if (
        ['defeatInZone', 'defeatSpecific'].includes(
          AllQuests[questId].objectives[objective].type
        )
      ) {
        return (
          Number(quest.objectives[objective] || 0) >=
          Number(AllQuests[questId].objectives[objective].amount || 0)
        )
      }

      return false
    }
  )
}
