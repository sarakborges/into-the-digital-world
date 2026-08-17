import { useEffect, useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { useDialogStore } from '@/Stores/Dialog.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './Dialog.style.scss'

export const Dialog = () => {
  const { dialog } = useDialogStore((state) => state)

  const [dialogContent, setDialogContent] = useState<
    Partial<DialogType> & {
      isTextRefreshing: boolean
      isPictureRefreshing: boolean
    }
  >({
    isTextRefreshing: false,
    isPictureRefreshing: false
  })

  useEffect(() => {
    setDialogContent({
      ...dialogContent,
      isTextRefreshing: dialog?.text !== dialogContent.text,
      isPictureRefreshing:
        dialog?.speaker?.picture !== dialogContent.speaker?.picture
    })

    setTimeout(() => {
      setDialogContent({
        ...dialog,
        isTextRefreshing: false,
        isPictureRefreshing: false
      })
    }, 600)
  }, [dialog])

  if (!dialog) {
    return
  }

  return (
    <div className="dialog">
      <div
        className={`dialog-speaker${!!dialogContent.isPictureRefreshing ? ' refresh-dialog' : ''}`}
      >
        {!!dialogContent?.speaker?.picture && (
          <Portrait
            src={`/${dialogContent.speaker.picture}.webp`}
            alt={dialogContent.speaker.name || ''}
          />
        )}
      </div>

      <div
        className={`dialog-text${!!dialogContent.isTextRefreshing ? ' refresh-dialog' : ''}`}
      >
        {!!dialogContent?.speaker?.portrait && (
          <header>
            {!!dialogContent.speaker.portrait && (
              <Portrait
                src={`/${dialogContent.speaker.portrait}.webp`}
                alt={dialogContent.speaker.name || ''}
              />
            )}

            <main>
              <Text>{dialogContent?.speaker.name}</Text>

              {!!dialogContent?.speaker.title && (
                <Text>{getTexts(dialogContent?.speaker.title)}</Text>
              )}
            </main>
          </header>
        )}

        <div className="dialog-internal-text">
          <Text as="p">{dialogContent.text}</Text>
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
    </div>
  )
}
