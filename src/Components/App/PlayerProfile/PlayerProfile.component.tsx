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
        <header>
          <Text>
            {getTexts('PROFILE_NAME').replaceAll('[NAME]', profile?.name)}
          </Text>

          <Text>
            {getTexts('PROFILE_TITLE').replaceAll(
              '[TITLE]',
              getTexts(`TITLES_${profile?.currentTitle.toLocaleUpperCase()}`)
            )}
          </Text>
        </header>

        <main>
          <Text>
            {getTexts('PROFILE_CURRENCY').replaceAll(
              '[CURRENCY]',
              profile?.currency || 0
            )}
          </Text>
        </main>
      </main>
    </div>
  )
}
