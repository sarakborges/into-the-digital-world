import type { MapTileType } from '@/Types/MapTile.type'

import { getTexts } from '@/Helpers/Language'
import {
  getCharacterVisibility,
  isNpcAcquainted
} from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'
import '@/Components/Main/GameboardCharacter/GameboardCharacter.style.scss'

export const GameboardCharacter = ({
  tile,
  isPlayer
}: {
  tile?: MapTileType
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
          '--character-x': tile?.x || profile.currentLocation.x,
          '--character-y': tile?.y || profile.currentLocation.y,
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
              : getTexts('UNKNOWN_NPC')}
          </Text>
        </>
      )}
    </div>
  )
}
