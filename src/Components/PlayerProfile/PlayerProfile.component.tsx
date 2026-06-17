import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/DesignSystem/Text'

import { CharacterHeader } from '@/Components/CharacterHeader'

import './PlayerProfile.style.scss'

export const PlayerProfile = () => {
  const { profile } = useProfileStore((state) => state)

  if (!profile) {
    return
  }

  return (
    <div className="player-profile">
      <CharacterHeader character={{ ...profile, isPlayer: true }} lg>
        <Text>
          {getTexts(`TITLES_${profile.currentTitle.toLocaleUpperCase()}`)}
        </Text>
      </CharacterHeader>
    </div>
  )
}
