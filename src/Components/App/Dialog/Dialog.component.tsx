import type { DialogType } from '@/Types/Dialog.type'

import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import './Dialog.style.scss'

export const Dialog = ({
  speaker,
  speakerAvatar,
  content,
  options
}: DialogType) => {
  return (
    <Modal>
      <main className="dialog">
        {speaker && (
          <header>
            {speakerAvatar && (
              <Portrait alt="Helper Digimon" src={`/${speakerAvatar}.webp`} />
            )}

            <Text>{speaker}</Text>
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
