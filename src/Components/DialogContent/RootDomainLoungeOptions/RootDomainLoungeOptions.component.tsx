import { RootDomainDormsDialog } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

import './RootDomainLoungeOptions.style.scss'

export const RootDomainLoungeOptions = () => {
  const goToRoom = () => {
    changeDialog(RootDomainDormsDialog, true)
    changeScene('rootDomainDorms', true)
  }

  return (
    <div className="skip-introduction">
      <ShadowButton onClick={goToRoom}>
        {getTexts('ROOT_DOMAIN_LOUNGE_GOTO_ROOM')}
      </ShadowButton>
    </div>
  )
}
