import type {DialogType} from '@/Types/Dialog.type'

import {useProfileStore} from '@/Stores/Profile.store'

import {Button} from '@/Components/DesignSystem/Button'

import {CharacterHeader} from '@/Components/Digivice/Apps/CharacterHeader'

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
              Object.keys(profile?.npcAcquaintances ?? {}).includes(
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
