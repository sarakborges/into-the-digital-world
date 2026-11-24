import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { SayNameReaction } from '@/Components/DialogContent/SayNameReaction'

export const getIntoTheDigitalWorld008 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    text: getTexts('ITDW_008', {
      '[NAME]': profile.name
    }),

    content: <SayNameReaction />
  }
}
