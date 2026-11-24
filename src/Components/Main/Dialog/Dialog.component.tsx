import { useEffect, useRef, useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { TRANSITION_DELAY_MS } from '@/Consts/Transitions.const'

import { useDialogStore } from '@/Stores/Dialog.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'
import { PlayerAvatar } from '@/Components/Global/PlayerAvatar'

import './Dialog.style.scss'

export const Dialog = () => {
  const { dialog, setIsTransitioning } = useDialogStore((state) => state)

  const [dialogContent, setDialogContent] = useState<
    Partial<DialogType> & {
      isTextRefreshing: boolean
      isPictureRefreshing: boolean
    }
  >({
    isTextRefreshing: false,
    isPictureRefreshing: false
  })

  const dialogContentRef = useRef(dialogContent)

  useEffect(() => {
    if (!dialog) {
      return
    }

    const currentDialogContent = dialogContentRef.current

    setDialogContent({
      ...currentDialogContent,
      isTextRefreshing:
        dialog.text !== currentDialogContent.text ||
        dialog.speaker?.portrait !== currentDialogContent.speaker?.portrait,
      isPictureRefreshing: dialog.image !== currentDialogContent.image
    })

    const timeout = setTimeout(() => {
      const nextDialogContent = {
        ...dialog,
        isTextRefreshing: false,
        isPictureRefreshing: false
      }

      dialogContentRef.current = nextDialogContent
      setDialogContent(nextDialogContent)
      setIsTransitioning(false)
    }, TRANSITION_DELAY_MS)

    return () => clearTimeout(timeout)
  }, [dialog, setIsTransitioning])

  if (!dialog) {
    return
  }

  return (
    <div className="dialog">
      {!!dialogContent?.image && (
        <div
          className={`dialog-speaker${!!dialogContent.isPictureRefreshing ? ' refresh-dialog' : ''}`}
        >
          <Portrait
            src={`/${dialogContent.image.src}.webp`}
            alt={dialogContent.image.alt || ''}
          />
        </div>
      )}

      {(!!dialogContent.text || !!dialogContent.content) && (
        <>
          <div
            className={`dialog-text${!!dialogContent.isTextRefreshing ? ' refresh-dialog' : ''}`}
          >
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

          <div
            className={`dialog-buttons${!!dialogContent.isTextRefreshing ? ' refresh-dialog' : ''}`}
          >
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
