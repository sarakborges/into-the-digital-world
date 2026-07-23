import { getTexts } from '@/Helpers/Language/getTexts.helper'

import { Text } from '@/Components/DesignSystem/Text/Text.component'
import '@/Components/Global/PartnerBond/PartnerBond.style.scss'

export const PartnerBond = () => {
  return (
    <div className="partner-bond">
      <Text>{getTexts('ENCYCLOPEDIA_BOND', { '[VALUE]': '0' })}</Text>

      <div>
        <div className="bond-bar"></div>
      </div>
    </div>
  )
}
