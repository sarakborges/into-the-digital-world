import type { ProfileType } from '@/Types/Profile.type'

import { getZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language'
import { saveProfile } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './GameFileSave.style.scss'

export const GameFileSave = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentZone) {
    return
  }

  const zone = getZoneDefinition(profile.currentZone.id)

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
        <Button onClick={() => saveProfile(profile.id)}>
          {getTexts('SAVEGAME_001_REWRITE')}
        </Button>
      </div>
    </div>
  )
}
