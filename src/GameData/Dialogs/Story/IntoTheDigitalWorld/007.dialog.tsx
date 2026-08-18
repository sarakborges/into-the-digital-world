import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'
import { getProfileName } from '@/Helpers/Systems/Profile'

import { SayNameReaction } from '@/Components/Forms/SayNameReaction'

export const getIntoTheDigitalWorld007 = (): DialogType => {
  const profileName = getProfileName()

  return {
    text: getTexts('ITDW_007', {
      '[NAME]': profileName
    }),
    form: <SayNameReaction />
  }
}
