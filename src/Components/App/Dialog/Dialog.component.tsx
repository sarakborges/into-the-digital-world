import { Portrait } from '@/Components/System/Portrait'
import { Text } from '@/Components/System/Text'
import { Modal } from '@/Components/System/Modal'
import { Button } from '@/Components/System/Button'

import './Dialog.style.scss'

export const Dialog = ({
  speaker,
  speakerAvatar,
  text
}: {
  speaker: string
  speakerAvatar: string
  text: string
}) => {
  return (
    <Modal>
      <main className="dialog">
        <header>
          <Portrait
            alt="Helper Digimon"
            src={`/digimon_portraits/${speakerAvatar}.jpg`}
          />

          <Text>{speaker}</Text>
        </header>

        <main>
          <Text>{text}</Text>
        </main>

        <footer>
          <Button>[...]</Button>
        </footer>
      </main>
    </Modal>
  )
}
