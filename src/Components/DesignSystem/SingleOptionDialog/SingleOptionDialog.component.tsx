import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { Dialog } from '@/Components/DesignSystem/Dialog/Dialog.component'
import { Text } from '@/Components/DesignSystem/Text/Text.component'

type SingleOptionDialogProps = {
  optionId: string
  text: string
  onAction: () => void
  optionText?: string | undefined
  speaker?: DialogType['speaker'] | undefined
}

export const SingleOptionDialog = ({
  optionId,
  text,
  onAction,
  optionText = getTexts('SCENES_CONTINUE_BUTTON'),
  speaker
}: SingleOptionDialogProps) => {
  const dialogOptions: DialogType = {
    content: (
      <div className="text-bubble">
        <Text as="p">{text}</Text>
      </div>
    ),

    options: [
      {
        id: optionId,
        text: optionText,
        action: onAction
      }
    ],

    ...(speaker ? { speaker } : {})
  }

  return <Dialog {...dialogOptions} />
}
