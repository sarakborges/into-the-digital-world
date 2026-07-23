import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'
import { isNpcAcquainted } from '@/Helpers/Systems/Profile/isNpcAcquainted.helper'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import '@/Components/DesignSystem/Dialog/Dialog.style.scss'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

export const Dialog = ({ speaker, content, options }: DialogType) => {
  const { profile } = useProfileStore((state) => state)

  return (
    <main className="dialog">
      {!!speaker && profile && (
        <CharacterHeader
          character={{
            ...speaker,
            isPlayer: !!speaker.isPlayer,
            name:
              isNpcAcquainted(speaker.id) || !!speaker.isPlayer
                ? speaker.name
                : getTexts('UNKNOWN_NPC')
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
                style="secondary"
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
