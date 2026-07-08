import type { JSX } from 'react'

import type { BaseDigimonType } from '@/Types/BaseDigimon.type'
import type { ProfileType } from '@/Types/Profile.type'
import type { NpcType } from '@/Types/Npc.type'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

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
