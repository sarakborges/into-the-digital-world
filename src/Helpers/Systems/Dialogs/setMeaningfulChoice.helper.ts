import { useProfileMeaningfulChoicesStore } from '@/Stores/ProfileMeaningfulChoices.store'

export const setMeaningfulChoice = ({
  choice,
  value
}: {
  choice: string
  value: string
}) => {
  const { profileMeaningfulChoices, setProfileMeaningfulChoices } =
    useProfileMeaningfulChoicesStore.getState()

  setProfileMeaningfulChoices({
    ...profileMeaningfulChoices,
    [choice]: value
  })
}
