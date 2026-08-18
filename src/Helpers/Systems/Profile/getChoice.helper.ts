import { useProfileStore } from '@/Stores/Profile.store'

export const getChoice = (choice: string) => {
  return useProfileStore.getState().profile?.meaningfulChoices?.[choice]
}
