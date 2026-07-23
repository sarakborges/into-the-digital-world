import { getTexts } from '@/Helpers/Language'

import { Text } from '@/Components/DesignSystem/Text'
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
