import type { ProfileType } from '@/Types/Profile.type'

import { AllScenes } from '@/GameData/Scenes'

import { getTexts } from '@/Helpers/Language'
import { loadGame } from '@/Helpers/Systems/Game'
import { deleteProfile } from '@/Helpers/Systems/Profile/deleteProfile.helper'

import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './GameFile.style.scss'

export const GameFile = ({ profile }: { profile: ProfileType }) => {
  if (!profile.id || !profile.currentScene) {
    return
  }

  const deleteGame = () => {
    if (!profile.id || !confirm(getTexts('CONFIRM_DELETE_GAME'))) {
      return
    }

    deleteProfile(profile.id)
  }

  const location = AllScenes[profile.currentScene].name

  return (
    <div className="game-file">
      <PlayerAvatar />

      <header>
        <Text>
          {getTexts('GAME_FILE_TITLE', {
            '[NAME]': profile.name,
            '[ID]': String(profile.id)
          })}
        </Text>

        <Text>
          {getTexts('GAME_FILE_LOCATION', {
            '[LOCATION]': location
          })}
        </Text>

        <Text>
          {getTexts('GAME_FILE_TIME', {
            '[TIME]': new Date(profile.lastSave).toLocaleString()
          })}
        </Text>
      </header>

      <div className="game-options">
        <Button onClick={() => loadGame(profile.id)}>
          {getTexts('LOAD_GAME_FILE')}
        </Button>

        <Button variant="cancel" onClick={deleteGame}>
          {getTexts('DELETE_GAME_FILE')}
        </Button>
      </div>
    </div>
  )
}
