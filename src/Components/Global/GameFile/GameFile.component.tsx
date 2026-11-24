import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Helpers/Language'
import { loadProfile } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  if (!profile.id) {
    return
  }

  const loadGame = () => {
    sessionStorage.setItem(`itdw_profile`, String(profile.id))
    loadProfile()
  }

  return (
    <div className="game-file">
      <PlayerAvatar />

      <header>
        <Text as="p">
          {getTexts('GAME_FILE_TITLE', {
            '[NAME]': profile.name,
            '[ID]': String(profile.id)
          })}
        </Text>

        <Text as="p">
          {getTexts('GAME_FILE_TIME', {
            '[TIME]': new Date(profile.lastSave).toLocaleString()
          })}
        </Text>
      </header>

      <div className="game-options">
        <Button onClick={loadGame}>{getTexts('LOAD_GAME')}</Button>
      </div>
    </div>
  )
}
