import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { useProfileStore } from '@/Stores/Profile.store'

import { SayNameReaction } from '@/Components/DialogContent/SayNameReaction'

export const getIntoTheDigitalWorld011 = (): DialogType => {
  const { profile } = useProfileStore.getState()

  return {
    text: getTexts('ITDW_011', {
      '[NAME]': profile.name
    }),

    content: <SayNameReaction />
  }
}
