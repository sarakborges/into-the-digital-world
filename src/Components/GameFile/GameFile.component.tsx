import type { ProfileType } from '@/Types/Profile.type'

import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import { LoadGame } from '@/Components/LoadGame'
import { DeleteGame } from '@/Components/DeleteGame'
import { PlayerAvatar } from '@/Components/PlayerAvatar'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentZone) {
    return
  }

  const zone = AllZones[profile.currentZone.id]

  return (
    <div className="game-file">
      <PlayerAvatar replaceAvatar={profile.avatar} />

      <header>
        <Text as="p">
          {getTexts('GAME_FILE_TITLE').replaceAll(`[NAME]`, profile.name)}
        </Text>

        <Text as="p">
          {getTexts('GAME_FILE_ZONE')
            .replaceAll(`[ZONE]`, zone.name)
            .replaceAll(`[MAP]`, zone[profile.currentZone.map].name)}
        </Text>

        <Text as="p">
          {getTexts('GAME_FILE_TIME').replaceAll(
            `[TIME]`,
            new Date(profile.lastSave).toLocaleString()
          )}
        </Text>
      </header>

      <div className="game-options">
        <LoadGame profileId={profile.id} />
        <DeleteGame profileId={profile.id} />
      </div>
    </div>
  )
}
