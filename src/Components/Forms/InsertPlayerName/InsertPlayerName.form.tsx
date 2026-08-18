import { useState } from 'react'

import { getIntoTheDigitalWorld007 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/007.dialog'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Input } from '@/Components/DesignSystem/Input'

import './InsertPlayerName.style.scss'

export const InsertPlayerName = () => {
  const { profile, setProfile } = useProfileStore((state) => state)
  const { setDialog } = useDialogStore((state) => state)

  if (!profile) {
    return
  }

  const [playerName, setPlayerName] = useState('')

  const handleFormSubmit = () => {
    setProfile({
      ...profile,
      name: playerName
    })

    setDialog(getIntoTheDigitalWorld007())
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
          label={getTexts('ITDW_006')}
          value={playerName}
          autoFocus
          onChange={(e) => setPlayerName(e.target.value.trim())}
        />
      </main>

      <footer>
        <Button disabled={!playerName}>
          {getTexts('SCENES_CONFIRM_BUTTON')}
        </Button>
      </footer>
    </form>
  )
}
