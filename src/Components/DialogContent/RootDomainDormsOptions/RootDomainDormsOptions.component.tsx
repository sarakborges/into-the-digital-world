import { FashionTrigger } from '@/GameData/Dialogs/Apps/Fashion/Trigger.dialog'
import { RootDomainLoungeDialog } from '@/GameData/Dialogs/Scenes/RootDomainLounge.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './RootDomainDormsOptions.style.scss'

export const RootDomainDormsOptions = () => {
  const openFashion = () => {
    changeDialog(FashionTrigger)
  }

  const goToLounge = () => {
    changeDialog(RootDomainLoungeDialog, true)
    changeScene('rootDomainLounge', true)
  }

  return (
    <div className="skip-introduction">
      <ShadowButton onClick={openFashion}>
        {getTexts('ROOT_DOMAIN_DORMS_OPEN_FASHION')}
      </ShadowButton>

      <ShadowButton onClick={goToLounge}>
        {getTexts('ROOT_DOMAIN_DORMS_LEAVE')}
      </ShadowButton>
    </div>
  )
}
