import type { DialogType } from '@/Types/Dialog.type'

import { useProfile } from '@/Hooks/Profile.hook'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import './Dialog.style.scss'

export const Dialog = ({ speaker, content, options }: DialogType) => {
  const { profile } = useProfile()

  return (
    <Modal>
      <main className="dialog">
        {speaker && (
          <header>
            {speaker.portrait && (
              <Portrait
                alt="Helper Digimon"
                src={`/${speaker.portrait}.webp`}
              />
            )}

            <Text>
              {Object.keys(profile!.npcAcquintances).includes(speaker.id) ||
              speaker.id === 'player'
                ? speaker.name
                : `???`}
            </Text>
          </header>
        )}

        <main>{content}</main>

        {options?.length && (
          <footer>
            {options.map((option) => (
              <div key={`dialog-option-${option.text}`}>
                <Button onClick={option.action}>{option.text}</Button>
              </div>
            ))}
          </footer>
        )}
      </main>
    </Modal>
  )
}
