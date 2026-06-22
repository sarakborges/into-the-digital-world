import type {ProfileType} from '@/Types/Profile.type'

import {AllZones} from '@/GameData/Zones'

import {getDialogs, getTexts} from '@/Helpers/Language'

import {Text} from '@/Components/DesignSystem/Text'
import {Button} from '@/Components/DesignSystem/Button'

import {PlayerAvatar} from '@/Components/Global/PlayerAvatar'

import './GameFileSave.style.scss'
import {saveProfile} from '@/Helpers/Systems/Profile'

export const GameFileSave = ({ profile }: { profile: ProfileType }) => {
  if (!profile.currentZone) {
    return
  }

  const zone = AllZones[profile.currentZone.id]

  return (
    <div className="game-file-save">
      <PlayerAvatar replaceAvatar={profile.avatar} />

      <header>
        <Text as="p">
          {getTexts('GAME_FILE_TITLE')
            .replaceAll(`[NAME]`, profile.name)
            .replaceAll(`[ID]`, profile.id)}
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
        <Button onClick={() => saveProfile(profile.id)} style="secondary">
          {getDialogs('SAVEGAME_001_REWRITE')}
        </Button>
      </div>
    </div>
  )
}
