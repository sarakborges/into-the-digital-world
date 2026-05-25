import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './PlayerProfile.style.scss'

export const PlayerProfile = () => {
  const { profile } = useProfile()

  return (
    <div className="player-profile">
      <CharacterHeader character={{ ...profile!, isPlayer: true }} lg>
        <Text>
          {getTexts(`TITLES_${profile?.currentTitle.toLocaleUpperCase()}`)}
        </Text>
      </CharacterHeader>

      {/* <main className="profile-info">
        <Text>
          {getTexts('PROFILE_CURRENCY').replaceAll(
            '[CURRENCY]',
            profile?.currency || 0
          )}
        </Text>
      </main> */}
    </div>
  )
}
