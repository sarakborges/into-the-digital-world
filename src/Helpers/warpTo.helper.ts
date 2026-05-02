import type { ProfileType } from '@/Types/Profile.type'

export const warpTo = ({
  setProfile,
  zoneId,
  x,
  y
}: {
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | null>>
  zoneId: string
  x: number
  y: number
}) => {
  if (!setProfile) {
    return
  }

  setProfile((prevProfile) => ({
    ...prevProfile!,
    currentZone: zoneId,
    currentX: x,
    currentY: y
  }))
}
