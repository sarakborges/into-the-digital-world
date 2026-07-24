import type { DigiviceType } from '@/Types/Digivice.type'

import { updateDigivice } from '@/Helpers/Systems/Digivice/updateDigivice.helper'

export const setCurrentDetails = (
  value: DigiviceType['currentDetails']
): void => {
  updateDigivice({ currentDetails: value })
}
