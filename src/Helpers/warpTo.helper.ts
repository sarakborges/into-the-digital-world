import type { ProfileType } from '@/Types/Profile.type'

import { saveSession } from '@/Helpers/saveSession.helper'

export const warpTo = ({
  profile,
  setProfile,
  zoneId,
  x,
  y
}: {
  profile: ProfileType
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
  zoneId: string
  x: number
  y: number
}) => {
  if (!setProfile) {
    return
  }

  const updatedProfile = {
    ...profile,
    currentZone: zoneId,
    currentX: x,
    currentY: y
  }

  setProfile(updatedProfile)
  saveSession({ key: 'profile', value: updatedProfile })
}
