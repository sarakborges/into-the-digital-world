import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { GennaiExplanationTopic } from '@/Components/DialogContent/GennaiExplanationTopic'

export const IntoTheDigitalWorld013 = {
  text: getTexts('ITDW_013'),
  content: <GennaiExplanationTopic />
} satisfies DialogType
