import type { ProfileType } from '@/Types/Profile.type'

import { getTexts } from '@/Texts'

import { Text } from '@/Components/System/Text'

import { LoadGame } from '@/Components/App/LoadGame'
import { DeleteGame } from '@/Components/App/DeleteGame'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  return (
    <div className="game-file">
      <header>
        <Text>
          {getTexts('GAME_FILE_TITLE').replaceAll(`[NAME]`, profile.name)}
        </Text>

        <Text>
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
