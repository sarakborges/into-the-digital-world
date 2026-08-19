import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'
import { getProfileName } from '@/Helpers/Systems/Profile'

import { SayNameReaction } from '@/Components/DialogContent/SayNameReaction'

export const getIntoTheDigitalWorld010 = (): DialogType => {
  const profileName = getProfileName()

  return {
    text: getTexts('ITDW_010', {
      '[NAME]': profileName
    }),

    content: <SayNameReaction />
  }
}
