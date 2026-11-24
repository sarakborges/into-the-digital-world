import { useEffect, useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { useDialogStore } from '@/Stores/Dialog.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './Dialog.style.scss'

export const Dialog = () => {
  const { dialog, patchDialog } = useDialogStore((state) => state)
  const [dialogContent, setDialogContent] = useState<DialogType | null>(null)

  useEffect(() => {
    patchDialog({
      isVisible: false
    })

    if (!dialog) {
      return
    }

    setTimeout(() => {
      setDialogContent(dialog)

      patchDialog({
        isVisible: true
      })
    }, 600)
  }, [dialog?.text, dialog?.content, dialog?.speaker])

  return (
    <div
      className={`dialog ${!dialog?.isVisible || !dialog ? 'dialog-hidden' : ''}`}
    >
      {!!dialogContent?.image && (
        <div className="dialog-speaker">
          <Portrait
            src={`/${dialogContent.image.src}.webp`}
            alt={dialogContent.image.alt || ''}
          />
        </div>
      )}

      {(!!dialogContent?.text || !!dialogContent?.content) && (
        <>
          <div className="dialog-text">
            {!!dialogContent?.speaker && (
              <header>
                {!!dialogContent.speaker.portrait && (
                  <Portrait
                    src={`/${dialogContent.speaker.portrait}.webp`}
                    alt={dialogContent.speaker.name || ''}
                  />
                )}

                {dialogContent.speaker.id === 'player' &&
                  !!dialogContent.speaker.portrait && <PlayerAvatar />}

                <main>
                  <Text>{dialogContent?.speaker.name}</Text>

                  {!!dialogContent?.speaker.title && (
                    <Text>{dialogContent?.speaker.title}</Text>
                  )}
                </main>
              </header>
            )}

            <div className="dialog-internal-text">
              {!!dialogContent.text && <Text as="p">{dialogContent.text}</Text>}
              {!!dialogContent.content && <>{dialogContent.content}</>}
            </div>
          </div>

          <div className="dialog-buttons">
            {dialogContent.actions?.map((dialogAction) => {
              const { id, text, ...otherProps } = dialogAction

              return (
                <Button key={`dialog-actions-${id}`} {...otherProps}>
                  {text}
                </Button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
