import type { SceneType } from '@/Types/Scene.type'

import type { MeaningfulChoiceReaction } from '@/GameData/Registries/MeaningfulChoice.registry'

import { setProfileSession } from '@/Helpers/Systems/Profile/setProfileSession.helper'

import { useSceneStore } from '@/Stores/Scene.store'

export const reactToMeaningfulChoice = ({
  reaction,
  nextScene
}: {
  reaction: MeaningfulChoiceReaction
  nextScene: SceneType | null
}): void => {
  const didUpdateProfile = setProfileSession((profile) => ({
    ...profile,

    meaningfulChoices: {
      ...profile.meaningfulChoices,
      [reaction.name]: reaction.value
    }
  }))

  if (!didUpdateProfile) {
    return
  }

  useSceneStore.getState().setScene(nextScene)
}
