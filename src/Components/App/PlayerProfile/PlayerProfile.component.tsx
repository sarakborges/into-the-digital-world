import { getTexts } from '@/Helpers/getTexts.helper'

import { useProfile } from '@/Hooks/Profile.hook'

import { Text } from '@/Components/System/Text'

import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './PlayerProfile.style.scss'

export const PlayerProfile = () => {
  const { profile } = useProfile()

  return (
    <div className="player-profile">
      <header className="player-header">
        <aside className="profile-avatar">
          <PlayerAvatar />
        </aside>

        <main>
          <Text>
            {getTexts('PROFILE_NAME').replaceAll('[NAME]', profile?.name)}
          </Text>

          <Text>
            {getTexts('PROFILE_TITLE').replaceAll(
              '[TITLE]',
              getTexts(`TITLES_${profile?.currentTitle.toLocaleUpperCase()}`)
            )}
          </Text>
        </main>
      </header>

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
