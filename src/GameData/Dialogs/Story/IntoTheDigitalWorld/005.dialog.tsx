import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { SayNameReaction } from '@/Components/DialogContent/SayNameReaction'

export const getIntoTheDigitalWorld005 = (): DialogType => ({
  text: getTexts('ITDW_005'),

  content: <SayNameReaction />
})
