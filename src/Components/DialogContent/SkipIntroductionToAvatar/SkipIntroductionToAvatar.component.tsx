import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const SkipIntroductionToAvatar = () => (
  <div className="dialog-options">
    <ShadowButton
      onClick={() => changeDialog(FashionIntroduction)}
      variation="small"
    >
      {getTexts('ITDW_021_SKIP')}
    </ShadowButton>
  </div>
)
