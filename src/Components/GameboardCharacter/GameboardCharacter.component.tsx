import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/DesignSystem/Portrait'
import { Text } from '@/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/PlayerAvatar'

import './GameboardCharacter.style.scss'

export const GameboardCharacter = ({
  tile,
  isPlayer
}: {
  tile?: ZoneTileType
  isPlayer?: boolean
}) => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  if (
    (!tile?.npc?.id && !isPlayer && !profile) ||
    (!isPlayer && !tile?.npc?.isVisible)
  ) {
    return
  }

  return (
    <div
      className="gameboard-character"
      style={
        {
          '--character-x': tile?.x || profile.currentZone.x,
          '--character-y': tile?.y || profile.currentZone.y,
          '--character-opacity':
            tile?.condition === undefined || !!tile?.condition?.() ? 1 : 0
        } as React.CSSProperties
      }
    >
      {!!isPlayer && !!profile && (
        <>
          <PlayerAvatar />

          <Text>{profile.name}</Text>
        </>
      )}

      {tile?.npc?.id && (
        <>
          <Portrait
            src={`/${tile.npc.portrait}.webp`}
            alt={tile.npc?.name || ''}
          />

          <Text>
            {Object.keys(profile.npcAcquaintances ?? {}).includes(
              tile.npc?.id || ''
            )
              ? tile.npc?.name
              : `???`}
          </Text>
        </>
      )}
    </div>
  )
}
