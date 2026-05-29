import type { ProfileType } from '@/Types/Profile.type'

import { AllZones } from '@/GameData/Zones'

import { getTexts } from '@/Helpers/getTexts.helper'

import { Text } from '@/Components/System/Text'

import { LoadGame } from '@/Components/App/LoadGame'
import { DeleteGame } from '@/Components/App/DeleteGame'
import { PlayerAvatar } from '@/Components/App/PlayerAvatar'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  return (
    <div className="game-file">
      <PlayerAvatar replaceAvatar={profile?.avatar} />

      <header>
        <Text as="p">
          {getTexts('GAME_FILE_TITLE')
            .replaceAll(`[NAME]`, profile.name)
            .replaceAll(`[ZONE]`, AllZones[profile.currentZone.id].name)}
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
