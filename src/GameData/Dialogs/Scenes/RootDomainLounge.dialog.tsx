import type { DialogType } from '@/Types/Dialog.type'

import { getTexts } from '@/Helpers/Language'

import { RootDomainLoungeOptions } from '@/Components/DialogContent/RootDomainLoungeOptions'

export const RootDomainLoungeDialog = {
  parent: 'rootDomainLounge',

  text: getTexts('ROOT_DOMAIN_LOUNGE'),

  content: <RootDomainLoungeOptions />
} satisfies DialogType
