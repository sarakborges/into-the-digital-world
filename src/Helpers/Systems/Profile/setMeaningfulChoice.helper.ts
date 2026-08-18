import { useProfileStore } from '@/Stores/Profile.store'

export const setMeaningfulChoice = ({
  choice,
  value
}: {
  choice: string
  value: string
}) => {
  const { profile, setProfile } = useProfileStore.getState()

  if (!profile) {
    return
  }

  setProfile({
    ...profile,
    meaningfulChoices: {
      ...profile?.meaningfulChoices,

      [choice]: value
    }
  })
}
