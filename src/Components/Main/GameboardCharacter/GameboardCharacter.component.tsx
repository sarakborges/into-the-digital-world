import type { ZoneTileType } from '@/Types/ZoneTile.type'

import { getTranslation } from '@/Helpers/Language'
import {
  getCharacterVisibility,
  isNpcAcquainted
} from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

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

  const { shouldRender, opacity } = getCharacterVisibility({
    tile,
    isPlayer
  })

  if (!shouldRender) {
    return
  }

  return (
    <div
      className="gameboard-character"
      style={
        {
          '--character-x': tile?.x || profile.currentZone.x,
          '--character-y': tile?.y || profile.currentZone.y,
          '--character-opacity': opacity
        } as React.CSSProperties
      }
    >
      {!!isPlayer && !!profile && (
        <>
          <PlayerAvatar />

          {profile.name && <Text>{profile.name}</Text>}
        </>
      )}

      {tile?.npc?.id && (
        <>
          <div>
            <Portrait
              src={`/${tile.npc.portrait}.webp`}
              alt={tile.npc?.name || ''}
            />
          </div>

          <Text>
            {isNpcAcquainted(tile.npc?.id || '')
              ? tile.npc?.name
              : getTranslation('UNKNOWN_NPC')}
          </Text>
        </>
      )}
    </div>
  )
}
