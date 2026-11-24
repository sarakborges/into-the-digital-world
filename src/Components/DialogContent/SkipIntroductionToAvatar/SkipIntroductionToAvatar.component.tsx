import { FashionIntroduction } from '@/GameData/Dialogs/Apps/Fashion/Introduction.dialog'

import { getTexts } from '@/Helpers/Language'
import { changeDialog } from '@/Helpers/Systems/Dialogs'

// import { useSavedProfilesStore } from '@/Stores/SavedProfiles.store'

import { ShadowButton } from '@/Components/DesignSystem/ShadowButton'

export const SkipIntroductionToAvatar = () => {
  // const { savedProfiles } = useSavedProfilesStore.getState()

  // if (!savedProfiles) {
  //   return <></>
  // }

  return (
    <div className="dialog-options">
      <ShadowButton
        onClick={() => changeDialog(FashionIntroduction)}
        variation="small"
      >
        {getTexts('ITDW_007_SKIP')}
      </ShadowButton>
    </div>
  )
}
