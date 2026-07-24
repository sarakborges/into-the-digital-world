import type { CssPropertiesWithVariables } from '@/Types/CssProperties.type'
import type { MapTileType } from '@/Types/MapTile.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { getCharacterVisibility } from '@/Helpers/Systems/Profile/getCharacterVisibility.helper'
import { isNpcAcquainted } from '@/Helpers/Systems/Profile/isNpcAcquainted.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait/Portrait.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'
import '@/Components/Main/GameboardCharacter/GameboardCharacter.style.scss'

type GameboardCharacterProps =
  | {
      tile: MapTileType
      isPlayer?: false
    }
  | {
      tile?: never
      isPlayer: true
    }

export const GameboardCharacter = ({
  tile,
  isPlayer
}: GameboardCharacterProps) => {
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

  const characterStyles: CssPropertiesWithVariables = {
    '--character-x': tile?.x ?? profile.currentLocation.x,
    '--character-y': tile?.y ?? profile.currentLocation.y,
    '--character-opacity': opacity
  }

  return (
    <div className="gameboard-character" style={characterStyles}>
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
