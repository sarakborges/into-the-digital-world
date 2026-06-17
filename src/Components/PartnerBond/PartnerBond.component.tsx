import { getTexts } from '@/Helpers/Language'

import { Text } from '@/DesignSystem/Text'

import './PartnerBond.style.scss'

export const PartnerBond = () => {
  return (
    <div className="partner-bond">
      <Text>{getTexts('ENCYCLOPEDIA_BOND').replaceAll('[VALUE]', 0)}</Text>

      <div>
        <Text>-100</Text>
        <div className="bond-bar"></div>
        <Text>+100</Text>
      </div>
    </div>
  )
}
