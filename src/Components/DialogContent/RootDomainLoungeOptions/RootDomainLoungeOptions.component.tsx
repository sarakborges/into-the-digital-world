import { getTexts } from '@/Helpers/Language'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const RootDomainLoungeOptions = () => {
  const goToRoom = () => {
    changeScene('rootDomainDorms', true)
  }

  return (
    <div className="dialog-options">
      <ShadowButton onClick={goToRoom}>
        {getTexts('ROOT_DOMAIN_LOUNGE_GOTO_ROOM')}
      </ShadowButton>
    </div>
  )
}
