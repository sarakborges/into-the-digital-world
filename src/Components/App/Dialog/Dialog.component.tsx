import type { DialogType } from '@/Types/Dialog.type'

import { useProfileStore } from '@/Stores/Profile.store'

import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import { CharacterHeader } from '@/Components/App/CharacterHeader'

import './Dialog.style.scss'

export const Dialog = ({ speaker, content, options }: DialogType) => {
  const { profile } = useProfileStore((state) => state)

  return (
    <main className="dialog">
      {!!speaker && (
        <CharacterHeader
          character={{
            ...speaker,
            isPlayer: !!speaker.isPlayer,
            name:
              Object.keys(profile!.npcAcquintances).includes(
                speaker.id.toString()
              ) || !!speaker.isPlayer
                ? speaker.name
                : `???`
          }}
        />
      )}

      <main>{content}</main>

      {options?.length && (
        <footer>
          {options.map((option) => (
            <div key={`dialog-option-${option.text}`}>
              <Button
                id={option.id}
                onClick={option.action}
                disabled={!!option.disabled}
              >
                {option.text}
              </Button>
            </div>
          ))}
        </footer>
      )}
    </main>
  )
}
