import type { ZoneTileType } from '@/Types/ZoneTile.type'
import type { ProfileType } from '@/Types/Profile.type'

export const getCharacterVisibility = ({
  profile,
  tile,
  isPlayer
}: {
  profile: ProfileType
  tile?: ZoneTileType
  isPlayer?: boolean
}) => {
  const isVisible =
    (!tile?.npc?.id && !isPlayer && !profile) ||
    (!isPlayer && !tile?.npc?.isVisible)

  return {
    shouldRender: !isVisible,
    opacity: tile?.condition === undefined || !!tile?.condition?.() ? 1 : 0
  }
}
