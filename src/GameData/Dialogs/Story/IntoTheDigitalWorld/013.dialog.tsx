import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { GennaiExplanationTopic } from '@/Components/Forms/GennaiExplanationTopic'

export const IntoTheDigitalWorld013 = {
  text: getTexts('ITDW_013'),
  form: <GennaiExplanationTopic />
} satisfies DialogType
