import type { DialogType } from '@/Types/Dialog.type'

import { getDialogs } from '@/Helpers/getDialogs.helper'

import { Text } from '@/Components/System/Text'

import { Dialog } from '@/Components/App/Dialog'

export const Introduction022 = () => {
  const dialogOptions: DialogType = {
    content: <Text as="p">{getDialogs('INTRODUCTION_022_TEXT')}</Text>
  }

  return <Dialog {...dialogOptions} />
}
