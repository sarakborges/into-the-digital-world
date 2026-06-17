import type { JSX } from 'react'

import type { ProfileType } from '@/Types/Profile.type'
import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { NpcType } from '@/Types/Npc.type'

import { Text } from '@/DesignSystem/Text'
import { Portrait } from '@/DesignSystem/Portrait'

import { PlayerAvatar } from '@/Components/PlayerAvatar'

import './CharacterHeader.style.scss'

export const CharacterHeader = ({
  character,
  lg,
  children
}: {
  character: (NpcType | BaseDigimonType | ProfileType) & {
    isPlayer?: boolean
    portrait?: string
  }
  lg?: boolean
  children?: JSX.Element
}) => {
  return (
    <header
      className="character-header"
      data-islg={!!lg}
      data-isplayer={!!character.isPlayer}
    >
      {!character.isPlayer && (
        <Portrait alt={character.name} src={`/${character.portrait}.webp`} />
      )}

      {!!character.isPlayer && <PlayerAvatar />}

      <div className="character-info">
        {children}

        <div className="character-name">
          <Text>{character.name}</Text>
        </div>
      </div>
    </header>
  )
}
