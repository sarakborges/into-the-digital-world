import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './PlayerProfile.style.scss'
import { getTexts } from '@/Helpers/getTexts.helper'

export const PlayerProfile = () => {
  const { profile } = useProfile()

  return (
    <div className="player-profile">
      <aside className="profile-avatar">
        <PlayerAvatar />
      </aside>

      <main className="profile-info">
        <div className="profile-info-item">
          <Text>{getTexts('PROFILE_NAME')}</Text>
          <Text>{profile?.name}</Text>
        </div>

        <div className="profile-info-item">
          <Text>{getTexts('PROFILE_CURRENCY')}</Text>
          <Text>{profile?.currency || 0}</Text>
        </div>
      </main>
    </div>
  )
}
