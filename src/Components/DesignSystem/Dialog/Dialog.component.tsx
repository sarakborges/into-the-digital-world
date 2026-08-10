import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'
import { isNpcAcquainted } from '@/Helpers/Systems/Profile'

import { useProfileStore } from '@/Stores/Profile.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { CharacterHeader } from '@/Components/Digivice/Apps/CharacterHeader'

import './Dialog.style.scss'

export const Dialog = ({ speaker, content, image, options }: DialogType) => {
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

      {!!image && (
        <aside className="dialog-image">
          <Portrait {...image} />
        </aside>
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
                variant="secondary"
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
