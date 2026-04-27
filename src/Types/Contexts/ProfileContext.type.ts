import type { ProfileType } from '@/Types/Profile.type'

export type ProfileContextType = {
  profile: ProfileType | null
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
}
