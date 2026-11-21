import { FashionTrigger } from '@/GameData/Dialogs/Apps/Fashion/Trigger.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './RootDomainDormsOptions.style.scss'

export const RootDomainDormsOptions = () => {
  const openFashion = () => {
    changeDialog(FashionTrigger)
  }

  return (
    <div className="skip-introduction">
      <ShadowButton onClick={openFashion}>
        {getTexts('ROOT_DOMAIN_DORMS_OPEN_FASHION')}
      </ShadowButton>

      <ShadowButton onClick={() => null}>
        {getTexts('ROOT_DOMAIN_DORMS_LEAVE')}
      </ShadowButton>
    </div>
  )
}
