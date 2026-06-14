import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './PlayerProfile.style.scss'

export const PlayerProfile = () => {
  const { profile } = useProfileStore((state) => state)

  return (
    <div className="player-profile">
      <CharacterHeader character={{ ...profile!, isPlayer: true }} lg>
        <Text>
          {getTexts(`TITLES_${profile?.currentTitle.toLocaleUpperCase()}`)}
        </Text>
      </CharacterHeader>
    </div>
  )
}
