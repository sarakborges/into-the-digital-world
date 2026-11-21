import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { RootDomainDormsOptions } from '@/Components/DialogContent/RootDomainDormsOptions'

export const RootDomainDorms = {
  text: getTexts('ROOT_DOMAIN_DORMS'),

  content: <RootDomainDormsOptions />
} satisfies DialogType
