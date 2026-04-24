import type { ProfileType } from '@/Types/Profile.type'

export type SavedProfilesContextType = {
  savedProfiles: Array<ProfileType> | null
  setSavedProfiles: React.Dispatch<
    React.SetStateAction<Array<ProfileType> | null>
  >
  loadProfiles: () => void
}
