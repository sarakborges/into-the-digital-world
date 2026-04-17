import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import './Dialog.style.scss'

export const Dialog = ({
  speaker,
  speakerAvatar,
  text,
  options
}: {
  speaker: string
  speakerAvatar: string
  text: string
  options?: Array<{
    text: string
    action: () => void
  }>
}) => {
  return (
    <Modal>
      <main className="dialog">
        <header>
          <Portrait alt="Helper Digimon" src={`/npcs/${speakerAvatar}.jpg`} />

          <Text>{speaker}</Text>
        </header>

        <main>
          <Text>{text}</Text>
        </main>

        {options?.length && (
          <footer>
            {options.map((option) => (
              <Button
                key={`dialog-option-${option.text}`}
                onClick={option.action}
              >
                {option.text}
              </Button>
            ))}
          </footer>
        )}
      </main>
    </Modal>
  )
}
