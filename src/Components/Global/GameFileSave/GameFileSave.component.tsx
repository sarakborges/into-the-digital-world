import type { ProfileType } from '@/Types/Profile.type'
import type { ZoneType } from '@/Types/Zone.type'

import type { ZoneCategoryType } from '@/GameData/Zones'
import { AllZones } from '@/GameData/Zones'

import { getTranslation } from '@/Helpers/Language'
import { saveProfile } from '@/Helpers/Systems/Profile'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './GameFileSave.style.scss'

export const GameFileSave = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentZone) {
    return
  }

  const zone = AllZones[profile.currentZone.id] as ZoneCategoryType
  const currentMap = zone[profile.currentZone.map] as ZoneType

  return (
    <div className="game-file-save">
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
            '[MAP]': currentMap.name
          })}
        </Text>

        <Text as="p">
          {getTranslation('GAME_FILE_TIME', {
            '[TIME]': new Date(profile.lastSave).toLocaleString()
          })}
        </Text>
      </header>

      <div className="game-options">
        <Button onClick={() => saveProfile(profile.id)} style="secondary">
          {getTranslation('SAVEGAME_001_REWRITE')}
        </Button>
      </div>
    </div>
  )
}
