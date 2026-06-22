import {getTexts} from '@/Helpers/Language'

import {useProfileStore} from '@/Stores/Profile.store'

import {Text} from '@/Components/DesignSystem/Text'

import {CharacterHeader} from '@/Components/Digivice/Apps/CharacterHeader'

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
