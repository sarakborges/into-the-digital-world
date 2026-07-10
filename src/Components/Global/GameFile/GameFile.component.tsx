import type { ProfileType } from '@/Types/Profile.type'

import { AllZones } from '@/GameData/Zones'

import { getTranslation } from '@/Helpers/Language'

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
  const map = zone.maps[profile.currentZone.map]

  if (!zone || !map) {
    return
  }

  return (
    <div className="game-file">
      <PlayerAvatar replaceAvatar={profile.avatar} />

      <header>
        <Text as="p">
          {getTranslation('GAME_FILE_TITLE', {
            '[NAME]': profile.name,
            '[ID]': String(profile.id)
          })}
        </Text>

        <Text as="p">
          {getTranslation('GAME_FILE_ZONE', {
            '[ZONE]': zone.name,
            '[MAP]': map.name
          })}
        </Text>

        <Text as="p">
          {getTranslation('GAME_FILE_TIME', {
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
