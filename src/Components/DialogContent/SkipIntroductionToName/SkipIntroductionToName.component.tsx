import { IntoTheDigitalWorld004 } from '@/GameData/Dialogs/Story/IntoTheDigitalWorld/004.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const SkipIntroductionToName = () => (
  <div className="dialog-options">
    <ShadowButton
      onClick={() => changeDialog(IntoTheDigitalWorld004)}
      variation="small"
    >
      {getTexts('ITDW_001_SKIP')}
    </ShadowButton>
  </div>
)
