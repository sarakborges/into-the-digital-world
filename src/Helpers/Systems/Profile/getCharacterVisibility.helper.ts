import type { MapTileType } from '@/Types/MapTile.type'

import { useProfileStore } from '@/Stores/Profile.store'

export const getCharacterVisibility = ({
  tile,
  isPlayer
}: {
  tile: MapTileType | undefined
  isPlayer: boolean | undefined
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
