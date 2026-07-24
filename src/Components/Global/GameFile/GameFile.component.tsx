import type { ProfileType } from '@/Types/Profile.type'

import { getZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

import { getTexts } from '@/Helpers/Language/getTexts.helper'
import { saveProfile } from '@/Helpers/Systems/Profile/saveProfile.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button/Button.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'
import { DeleteGame } from '@/Components/Global/DeleteGame/DeleteGame.component'
import '@/Components/Global/GameFile/GameFile.style.scss'
import { LoadGame } from '@/Components/Global/LoadGame/LoadGame.component'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar/PlayerAvatar.component'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  const currentProfile = useProfileStore((state) => state.profile)
  const isSaving = !!currentProfile
  const zone = getZoneDefinition(profile.currentLocation.zone)

  if (!zone) {
    return
  }

  return (
    <div
      className="game-file"
      data-mode={isSaving ? 'saving' : 'loading'}
    >
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
        {isSaving ? (
          <Button onClick={() => saveProfile(profile.id)}>
            {getTexts('SAVEGAME_001_REWRITE')}
          </Button>
        ) : (
          <>
            <LoadGame profileId={profile.id} />
            <DeleteGame profileId={profile.id} />
          </>
        )}
      </div>
    </div>
  )
}
