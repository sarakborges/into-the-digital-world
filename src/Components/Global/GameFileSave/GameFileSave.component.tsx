import type { ProfileType } from '@/Types/Profile.type'

import { getZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveProfile } from '@/Helpers/Systems/Profile/saveProfile.helper'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Global/GameFileSave/GameFileSave.style.scss'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

export const GameFileSave = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentLocation) {
    return
  }

  const zone = getZoneDefinition(profile.currentLocation.zone)

  if (!zone) {
    return
  }

  return (
    <div className="game-file-save">
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
        <Button onClick={() => void saveProfile(profile.id)}>
          {getTexts('SAVEGAME_001_REWRITE')}
        </Button>
      </div>
    </div>
  )
}
