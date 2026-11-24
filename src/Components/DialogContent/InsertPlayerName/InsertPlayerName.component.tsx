import { useState } from 'react'

import { getIntoTheDigitalWorld005 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/005.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Input } from '@/Components/DesignSystem/Input'

import './InsertPlayerName.style.scss'

export const InsertPlayerName = () => {
  const [playerName, setPlayerName] = useState('')

  const { patchProfile } = useProfileStore((state) => state)

  const normalizedPlayerName = playerName.trim()

  const handleFormSubmit = () => {
    if (!normalizedPlayerName) {
      return
    }

    patchProfile({
      name: normalizedPlayerName
    })

    changeDialog(getIntoTheDigitalWorld005())
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleFormSubmit()
      }}
      className="insert-player-name"
    >
      <main>
        <Input
          name="insert-player-name"
          label={getTexts('ITDW_004_PLAYERNAME')}
          value={playerName}
          autoFocus
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </main>

      <footer>
        <Button disabled={!normalizedPlayerName}>
          {getTexts('SCENES_CONFIRM_BUTTON')}
        </Button>
      </footer>
    </form>
  )
}
