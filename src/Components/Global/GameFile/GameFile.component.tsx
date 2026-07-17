import type { ProfileType } from '@/Types/Profile.type'

import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'
import { DeleteGame } from '@/Components/Global/DeleteGame'
import { LoadGame } from '@/Components/Global/LoadGame'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentZone) {
    return
  }

  const zone = AllZones[profile.currentZone.id]

  if (!zone) {
    return
  }

  return (
    <div className="game-file">
      <PlayerAvatar replaceAvatar={profile.avatar} />

      <header>
        <Text as="p">
          {getTexts('GAME_FILE_TITLE', {
            '[NAME]': profile.name,
            '[ID]': String(profile.id)
          })}
        </Text>

        <Text as="p">
          {getTexts('GAME_FILE_ZONE', {
            '[ZONE]': zone.name
          })}
        </Text>

        <Text as="p">
          {getTexts('GAME_FILE_TIME', {
            '[TIME]': new Date(profile.lastSave).toLocaleString()
          })}
        </Text>
      </header>

      <div className="game-options">
        <LoadGame profileId={profile.id} />
        <DeleteGame profileId={profile.id} />
      </div>
    </div>
  )
}
