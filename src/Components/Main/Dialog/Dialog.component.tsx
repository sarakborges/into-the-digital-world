import { useEffect, useState } from 'react'

import type { DialogType } from '@/Types/Dialog.type'

import { useDialogStore } from '@/Stores/Dialog.store'

import { Button } from '@/Components/DesignSystem/Button'
import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Text } from '@/Components/DesignSystem/Text'

import './Dialog.style.scss'

export const Dialog = () => {
  const { dialog } = useDialogStore((state) => state)

  const [dialogContent, setDialogContent] = useState<
    Partial<DialogType> & { isRefreshing: boolean }
  >({
    isRefreshing: false
  })

  useEffect(() => {
    setDialogContent({
      ...dialogContent,
      isRefreshing: true
    })

    setTimeout(() => {
      setDialogContent({
        ...dialog,
        isRefreshing: false
      })
    }, 600)
  }, [dialog])

  if (!dialog) {
    return
  }

  return (
    <div
      className={`dialog${!!dialogContent.isRefreshing ? ' refresh-dialog' : ''}`}
    >
      <div className="dialog-speaker">
        {!!dialogContent?.speaker && (
          <>
            <Portrait
              src={`/${dialogContent.speaker.picture}.webp`}
              alt={dialogContent.speaker.name || ''}
            />
          </>
        )}
      </div>

      <div className="dialog-text">
        {!!dialogContent?.speaker && (
          <header>
            <Text>{dialogContent?.speaker.name}</Text>

            {!!dialogContent?.speaker.title && (
              <Text>{dialogContent?.speaker.title}</Text>
            )}
          </header>
        )}

        <div className="dialog-internal-text">
          <Text as="p">{dialogContent.text}</Text>
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
    </div>
  )
}
