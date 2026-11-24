import { useProfileMeaningfulChoicesStore } from '@/Stores/ProfileMeaningfulChoices.store'

export const getChoice = (choice: string) => {
  const { profileMeaningfulChoices } =
    useProfileMeaningfulChoicesStore.getState()

  return profileMeaningfulChoices?.[choice]
}
