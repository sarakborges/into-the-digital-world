import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCharacterVisibility = ({
  tile,
  isPlayer
}: {
  tile?: ZoneTileType
  isPlayer?: boolean
}) => {
  const profile = useProfileStore.getState().profile

  const isVisible =
    (!tile?.npc?.id && !isPlayer && !profile) ||
    (!isPlayer && !tile?.npc?.isVisible)

  return {
    shouldRender: !isVisible,
    opacity: tile?.condition === undefined || !!tile?.condition?.() ? 1 : 0
  }
}
