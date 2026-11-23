import { RootDomainDormsDialog } from '@/GameData/Dialogs/Scenes/RootDomainDorms.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'
import { changeScene } from '@/Helpers/Systems/Scenes'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const RootDomainLoungeOptions = () => {
  const goToRoom = () => {
    changeDialog(RootDomainDormsDialog, true)
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
