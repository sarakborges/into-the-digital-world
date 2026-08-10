import { useProfileStore } from '@/Stores/Profile.store'
import { useSceneStore } from '@/Stores/Scene.store'

export const reactToMeaningfulChoice = ({
  reaction,
  nextScene
}: {
  reaction: {
    name: string
    value: string
  }
  nextScene: React.FC | null
}) => {
  const { profile, setProfile } = useProfileStore.getState()
  const { setScene } = useSceneStore.getState()

  if (!profile) {
    return
  }

  setProfile({
    ...profile,

    meaningfulChoices: {
      ...profile.meaningfulChoices,
      [reaction.name]: reaction.value
    }
  })

  setScene(nextScene)
}
