import { AllQuests } from '@/GameData/Quests'

import { isQuestDone } from '@/Helpers/Systems/Quests'

import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const getAppAvailability = (appId: string): boolean => {
  const profile = useProfileStore.getState().profile
  const scene = useSceneStore.getState().scene

  if (!profile) {
    return false
  }

  const doneQuests = Object.keys(profile.quests).filter((quest) =>
    isQuestDone(quest)
  )

  const isSave = appId === 'save'
  const isLogoff = appId === 'logoff'
  const isMap = appId === 'map'

  return !(
    !!scene ||
    (!doneQuests.includes(AllQuests.starterDigimon.id) &&
      !(!!isSave || !!isLogoff || !!isMap))
  )
}
