import { useProfileStore } from '@/Stores/Profile.store'

export const reactToMeaningfulChoice = ({
  reaction
}: {
  reaction: {
    name: string
    value: string
  }
  nextScene: React.FC | null
}) => {
  const { profile, setProfile } = useProfileStore.getState()

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
}
