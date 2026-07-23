import type { ProfileType } from '@/Types/Profile.type'

import { getZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'
import { DeleteGame } from '@/Components/Global/DeleteGame'
import '@/Components/Global/GameFile/GameFile.style.scss'
import { LoadGame } from '@/Components/Global/LoadGame'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentLocation) {
    return
  }

  const zone = getZoneDefinition(profile.currentLocation.zone)

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
