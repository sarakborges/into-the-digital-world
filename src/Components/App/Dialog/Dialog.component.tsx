import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import './Dialog.style.scss'

export const Dialog = ({
  speaker,
  speakerAvatar,
  text,
  image,
  options
}: {
  speaker?: string
  speakerAvatar?: string
  text?: string
  image?: {
    alt: string
    src: string
  }
  options: Array<{
    text: string
    action: () => void
  }>
}) => {
  return (
    <Modal>
      <main className="dialog">
        {speaker && (
          <header>
            {speakerAvatar && (
              <Portrait
                alt="Helper Digimon"
                src={`/npcs/${speakerAvatar}.jpg`}
              />
            )}

            <Text>{speaker}</Text>
          </header>
        )}

        <main>
          {image && <Portrait {...image} />}
          {text && <Text>{text}</Text>}
        </main>

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
